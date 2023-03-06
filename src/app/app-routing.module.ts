import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPlantComponent } from './detail-plant/detail-plant.component';
import { ListPlantComponent } from './list-plant/list-plant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'plants', component: ListPlantComponent},
  {path: 'plant/:id', component: DetailPlantComponent},
  {path: '', redirectTo: 'plants', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
