import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

import {HttpClientModule} from '@angular/common/http';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { RentPropertyComponent } from './property/rent-property/rent-property.component';
import { BuyPropertyComponent } from './property/buy-property/buy-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    RentPropertyComponent,
    BuyPropertyComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
