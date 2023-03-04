import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { ListPlantComponent } from './list-plant/list-plant.component';
import { DetailPlantComponent } from './detail-plant/detail-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    ListPlantComponent,
    DetailPlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
