import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person.model';
import * as Fuse from 'fuse.js';
import { intersectionBy, cloneDeep, intersectionWith } from 'lodash';
// import { intersectionWith } from 'lodash/intersectionWith'; // ToDo: minimize imported files

@Pipe({
  name: 'personFilterPipe'
})
export class PersonFilterPipe implements PipeTransform {

  transform(value: Person[], searchChips: Materialize.ChipDataObject[]): any[] {

    // if no search tags are choosen return the whole person array
    if (searchChips.length === 0 || searchChips === undefined) {
      return value;
    }

    // search keys
    let searchKeys = [];

    // prepare search keys
    if (value[0]) {

      // get all keys of an person object
      searchKeys = Object.keys(value[0]);

      // do not search in id
      if (searchKeys.includes('id')) {

        // get id of id
        const id: number = searchKeys.indexOf('id');

        // delete id
        searchKeys = (id > -1) ? [
          ...searchKeys.slice(0, id),
          ...searchKeys.slice(id + 1)
        ] : searchKeys;
      }

      // search in name of currentPGRole
      if (searchKeys.includes('currentPGRole')) {

        // get id of currentPGRole
        const id: number = searchKeys.indexOf('currentPGRole');
        searchKeys[id] = 'currentPGRole.name';
      }

      // search in pg-roles array
      if (searchKeys.includes('pgRoles')) {

        // get id of pgRoles
        const id: number = searchKeys.indexOf('pgRoles');
        searchKeys[id] = 'pgRoles.name';
      }
    } else {
      throw new Error('no data to search in');
    }

    // https://fusejs.io/

    // use fuse.js for searching
    const options: Fuse.FuseOptions<Person> = {
      shouldSort: true,
      includeScore: true,
      // includeMatches: true, // for debugging
      tokenize: true,
      matchAllTokens: true,
      minMatchCharLength: 3,
      keys: searchKeys
    };
    const fuse = new Fuse(value, options);

    // array of search results
    const resultArray = [];

    // search for all tags
    return searchChips.reduce((accumulator, currentValue, currentIndex) => {

      // search for one tag
      const results = fuse.search(currentValue.tag);
      // bug: return type of search() is Person althrough scoring is activated
      // see https://github.com/krisk/Fuse/issues/265

      // handle first tag
      if (currentIndex === 0) {
        return results;
      } else {

        if (currentIndex === 1) {

          // score counter is used to calc the mean propability of all matches
          // set score counter to 1 for each person
          accumulator.forEach(person => person.scoreCounter = 1);
        }

        // compute intersection of arrays accumulator and results
        const intersectedArray = intersectionWith(accumulator, results, (person1, person2) => {

          // persons are equal
          // @ts-ignore
          if (person1.item.id === person2.item.id) {

            // sum both scores
            // @ts-ignore
            person1.score = person1.score + person2.score;
            // @ts-ignore
            person2.score = person1.score + person2.score;

            // increae score counter
            person1.scoreCounter++;
            // @ts-ignore
            person2.scoreCounter++;

            return true;
          }
          return false;
        });

        return intersectedArray;
      }

    }, resultArray)
      .map(person => {
        // calc search probability
        if (person.scoreCounter && person.scoreCounter > 1) {
          person.score = person.score / person.scoreCounter;
        }
        return person;
      })
      .sort((person1, person2) => {
        // sort ascending
        return person1.score - person2.score;
      })
      .map(person => person = person.item) // delete score and score counter
  }
}
