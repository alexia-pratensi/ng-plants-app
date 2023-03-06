import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from '../plant'
import { PathLocationStrategy } from '@angular/common';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-detail-plant',
  templateUrl: './detail-plant.component.html',
  styles: [
  ]
})
export class DetailPlantComponent implements OnInit {

  plantList: Plant [];
  currentPlant : Plant | undefined;

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private plantService: PlantService
     ){}

  ngOnInit() {
    const plantId : string | null = this.route.snapshot.paramMap.get('id');
    if(plantId) {
      this.currentPlant = this.plantService.getPlantById(+plantId)
    }
  }

  goBack() {
    this.router.navigate(['/plants']);
  }
}
