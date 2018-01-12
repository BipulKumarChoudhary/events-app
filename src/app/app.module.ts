import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';

import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventNavComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolverService,
  Error404Component
} from './index'

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventNavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have not saved the data. Do you really want to cancel?')

  return true;
}
