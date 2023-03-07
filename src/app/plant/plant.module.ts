import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { ListPlantComponent } from './list-plant/list-plant.component';
import { DetailPlantComponent } from './detail-plant/detail-plant.component';
import { Routes, RouterModule } from '@angular/router';
import { PlantService } from './plant.service';


const plantRoutes: Routes = [
  {path: 'plants', component: ListPlantComponent},
  {path: 'plant/:id', component: DetailPlantComponent}
]

@NgModule({
  declarations: [
    BorderCardDirective,
    ListPlantComponent,
    DetailPlantComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(plantRoutes)
  ],
  providers: [
    PlantService
  ],
  // exports: [
  //   PlantModule
  // ]
})
export class PlantModule { }
