import { Routes} from '@angular/router'
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';

export const appRoutes : Routes = [
    { path: 'events/new', component: CreateEventComponent  },  // We will talk about the placement of this route   
    { path: 'events', component: EventsListComponent  },
    { path: 'events/:id', component: EventDetailsComponent  },  // events/1 or //events/foo
    { path: '', redirectTo: '/events', pathMatch: 'full' } // default path where pathMatch can accept prefix or full
]