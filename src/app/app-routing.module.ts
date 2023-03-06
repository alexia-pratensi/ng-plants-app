import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPlantComponent } from './plant/detail-plant/detail-plant.component';
import { ListPlantComponent } from './plant/list-plant/list-plant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'plants', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
