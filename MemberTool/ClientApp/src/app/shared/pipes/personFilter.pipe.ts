import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person.model';


@Pipe({
  name: 'personFilterPipe'
})
export class PersonFilterPipe implements PipeTransform {

  transform(value: Person[], searchInput: string): any[] {

    return value.filter((person) => {
      // return person.name.toLowerCase().trim().includes(searchInput.toLowerCase().trim());

      return JSON.stringify(Object.values(person)).toLowerCase().trim().includes(searchInput.toLowerCase().trim());

      // ToDo search in each property of a person
    });
  }
}
