import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ClassesComponent } from './components/classes/classes.component';
import { RacesComponent } from './components/races/races.component';
import { NpcsComponent } from './components/npcs/npcs.component';
import { BitmaskComponent } from './components/bitmask/bitmask.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ClassesComponent,
    RacesComponent,
    NpcsComponent,
    BitmaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
