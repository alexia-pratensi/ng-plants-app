import { Component, OnInit } from '@angular/core';
import { PLANTS } from './plant_list';
import { Plant } from './plant';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
 plantList: Plant[] = PLANTS;
 plantSelected: Plant|undefined;

  ngOnInit() {
    console.table(this.plantList)
  }

  selectPlant(plantId: string) {
    const plant: Plant|undefined = this.plantList.find(plant => +plantId == plant.id)
    if (plant) {
      console.log(`Vous avez cliqué sur la plante ${plant.name}`);
      this.plantSelected = plant;
    } else {
      console.log(`Vous avez demandé une plante qui n'existe pas.`);
      this.plantSelected = plant;
    }
  }

}
