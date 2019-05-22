import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonGridComponent} from './person-grid/person-grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: 'grid', component: PersonGridComponent },
  // { path: 'carousel', component: PersonCarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
