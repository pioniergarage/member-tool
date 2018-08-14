import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // subscriptions
  private subscriptions: Subscription[] = [];

  // current state
  public currentState;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
