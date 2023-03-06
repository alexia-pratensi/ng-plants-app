import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { PLANTS } from './plant_list';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  getPlantList(): Plant  [] {
    return PLANTS
  }

  getPlantById(plantId: number): Plant|undefined {
    return PLANTS.find(plant => plant.id == plantId)
  }


}
