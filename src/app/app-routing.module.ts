import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './components/classes/classes.component';
import { ItemsComponent } from './components/items/items.component';
import { NpcsComponent } from './components/npcs/npcs.component';
import { RacesComponent } from './components/races/races.component';

const routes: Routes = [
  { path: `races`, component: RacesComponent },
  { path: `classes`, component: ClassesComponent },
  { path: `npcs`, component: NpcsComponent },
  { path: `items`, component: ItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
