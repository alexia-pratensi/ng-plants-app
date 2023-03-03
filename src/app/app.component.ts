import { Component, OnInit } from '@angular/core';
import { PLANTS } from './plant_list';
import { Plant } from './plant';

@Component({
  selector: 'app-root',
  template:`<h1>Liste de plantes</h1>`
})
export class AppComponent implements OnInit{
 plantList: Plant[] = PLANTS;

  ngOnInit() {
    console.table(this.plantList)
    this.selectPlant(this.plantList[0])
  }

  selectPlant(plant: Plant) {
    console.log(`Vous avez cliqué sur la plante ${plant.name}`)
  }

}
