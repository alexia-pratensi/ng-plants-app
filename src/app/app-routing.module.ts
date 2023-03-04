import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPlantComponent } from './detail-plant/detail-plant.component';
import { ListPlantComponent } from './list-plant/list-plant.component';

const routes: Routes = [
  {path: 'plants', component: ListPlantComponent},
  {path: 'plant/:id', component: DetailPlantComponent},
  {path: '', redirectTo: 'plants', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
