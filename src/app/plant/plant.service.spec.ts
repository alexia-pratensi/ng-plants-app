import { TestBed } from '@angular/core/testing';
import { PLANTS } from './plant_list';
import { Plant } from './plant';
import { PlantService } from './plant.service';

describe('PlantService', () => {
  let service: PlantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantService);
  });

  it('should return the plant with the given id', () => {
    const testPlantId = 2;
    const expectedPlant: Plant = PLANTS.find(plant => plant.id === testPlantId)!; // On suppose que la plante d'ID 2 existe déjà dans la liste de plantes
    const actualPlant = service.getPlantById(testPlantId);
    expect(actualPlant).toEqual(expectedPlant);
  });

  it('should return undefined when the plant with the given id is not found', () => {
    const testPlantId = 100;
    const actualPlant = service.getPlantById(testPlantId);
    expect(actualPlant).toBeUndefined();
  });
});
