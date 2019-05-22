import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Person} from '../models/person.model';
import {Observable} from 'rxjs';

@Injectable()
export class PersonService {

  // api url
  private API_URL = environment.peopleApiUrl;

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>('assets/people.json');
  }
}
