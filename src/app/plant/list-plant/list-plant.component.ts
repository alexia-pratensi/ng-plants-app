import { Component, OnInit } from '@angular/core';
import { PLANTS } from '../plant_list';
import { Plant } from '../plant';
import { Router } from '@angular/router';
import { PlantService } from '../plant.service';


@Component({
  selector: 'app-list-plant',
  templateUrl: './list-plant.component.html',
})
export class ListPlantComponent implements OnInit {
  plantList: Plant[] = PLANTS;

  constructor(
    private router: Router,
    private plantService: PlantService
   ) {}

  ngOnInit(){
    this.plantList = this.plantService.getPlantList();
  }

   goToPlant(plant: Plant) {
    this.router.navigate(['/plant', plant.id]);
  }




  // plantSelected: Plant|undefined;

  //  ngOnInit() {
  //    console.table(this.plantList)
  //  }

  //  selectPlant(plantId: string) {
  //    const plant: Plant|undefined = this.plantList.find(plant => +plantId == plant.id)
  //    if (plant) {
  //      console.log(`Vous avez cliqué sur la plante ${plant.name}`);
  //      this.plantSelected = plant;
  //    } else {
  //      console.log(`Vous avez demandé une plante qui n'existe pas.`);
  //      this.plantSelected = plant;
  //    }
  //  }
}
