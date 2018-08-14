import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from '../shared/models/person.model';
import {Subscription} from '../../../node_modules/rxjs';
import {PersonService} from '../shared/services/person.service';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit, OnDestroy {

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

}
