import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from '../model/event.model';

@Component({
  //selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  constructor(private eventservice: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.event = this.eventservice.getEvent
    (+this.route.snapshot.params['id']); // + is used to type convert to integer
  }

}
