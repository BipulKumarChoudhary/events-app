import { Routes} from '@angular/router'
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivator } from './event-details/event-route-activator';
import { EventsListResolverService } from './service/events-list-resolver.service';

export const appRoutes : Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']  },  // We will talk about the placement of this route   
    { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}  },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]  },  // events/1 or //events/foo
    { path: '', redirectTo: '/events', pathMatch: 'full' }, // default path where pathMatch can accept prefix or full
    { path: '404', component: Error404Component }
]