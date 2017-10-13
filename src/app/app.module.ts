import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { TripPostViewComponent } from './trip-post-view/trip-post-view.component';
import { RideRequestEditFormComponent } from './ride-request-edit-form/ride-request-edit-form.component';
import { TripPostEditFormComponent } from './trip-post-edit-form/trip-post-edit-form.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { BookingViewComponent } from './booking-view/booking-view.component';
import { RideRequestsListComponent } from './ride-requests-list/ride-requests-list.component';
import { RideRequestViewComponent } from './ride-request-view/ride-request-view.component';
import { TripPostsListComponent } from './trip-posts-list/trip-posts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    TripPostViewComponent,
    RideRequestEditFormComponent,
    TripPostEditFormComponent,
    BookingsListComponent,
    BookingViewComponent,
    RideRequestsListComponent,
    RideRequestViewComponent,
    TripPostsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
