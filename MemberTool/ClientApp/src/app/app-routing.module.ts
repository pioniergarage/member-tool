import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CardGridComponent} from './card-grid/card-grid.component';
import {CardCarouselComponent} from './card-carousel/card-carousel.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: 'grid', component: CardGridComponent },
  { path: 'carousel', component: CardCarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
