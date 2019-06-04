import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PersonService } from '../shared/services/person.service';
import { Person } from '../shared/models/person.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-person-grid',
  templateUrl: './person-grid.component.html',
  styleUrls: ['./person-grid.component.scss']
})
export class PersonGridComponent implements OnInit, OnDestroy {

  // all persons
  persons: Person[] = [];

  // subscription
  private subscriptions: Subscription[] = [];

  // search input chips array
  public searchChips: Materialize.ChipDataObject[] = [];

  constructor(private memberService: PersonService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    // subscribe to persons
    this.subscriptions.push(
      this.memberService.getPersons().subscribe((persons: Person[]) => {

        // debug
        // console.log(persons)
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

  // method changes card color due to the current status of the member
  getPersonStatus(person: Person) {

    if (person.currentPGRole.name.toLowerCase() === 'alumnus') {
      return {
        background: 'linear-gradient(90deg, #005258 0%, rgba(0, 82, 88, 0.5) 100%)'
      };
    }
  }

  onChipsAdded(event) {
    // run change detector
    this.changeDetectorRef.detectChanges();
  }

  onChipsDeleted(event) {
    // run change detector
    this.changeDetectorRef.detectChanges();
  }
}
