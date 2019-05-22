import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { PersonService } from '../shared/services/person.service';
import { Person } from '../shared/models/person.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-person-grid',
  templateUrl: './person-grid.component.html',
  styleUrls: ['./person-grid.component.scss']
})
export class PersonGridComponent implements OnInit, OnDestroy {

  // person filter
  public searchInput: string = '';

  // all persons
  persons: Person[] = [];

  // subscription
  private subscriptions: Subscription[] = [];

  constructor(private memberService: PersonService) { }

  ngOnInit() {
    // subscribe to persons
    this.subscriptions.push(
      this.memberService.getPersons().subscribe((persons: Person[]) => {
        console.log(persons)
        this.persons = persons;
      },
        (error) => {
          console.log(error);
        })
    );
  }

  ngOnDestroy(): void {
    // unsubscribe all subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getPersonStatus(person: Person) {

    // opacity value
    const opacity = 0.7;

    if (person.currentPGRole.name.toLowerCase() === 'alumnus') {
      return {
        '-webkit-filter': `opacity(${opacity})`,
        filter: `opacity(${opacity})`
      };
    }
  }
}
