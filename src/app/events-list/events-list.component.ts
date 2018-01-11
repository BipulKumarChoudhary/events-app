import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';

@Component({
  //selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any[];
  constructor(private eventservice: EventService) {
   }
  //   the private varible is equal to below code
  //   eventservice
  //   constructor() { 
  //     this.eventservice = eventservice
  //  }
  ngOnInit() {
    this.events = this.eventservice.getEvents();
  }
}
