import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Person } from '../models/person.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PersonService {

  // api url
  private API_URL = environment.peopleApiUrl;

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.API_URL}`)
      .pipe(
        // modify date format
        map((persons: Person[]) => {

          return persons.map((person: Person) => {

            // create new date
            const date = new Date(person.memberSince);

            // format date
            const options = { month: '2-digit', year: 'numeric' };

            // execute format options and add whitespace e.g. '04 / 2018'
            const dateString = date.toLocaleDateString('default', options).replace('/', ' / ');

            // update person property
            person.memberSince = dateString;

            return person;
          });
        })
      );
  }
}
