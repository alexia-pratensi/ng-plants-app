import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PLANTS } from '../plant_list';
import { Plant } from '../plant';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-detail-plant',
  templateUrl: './detail-plant.component.html',
  styles: [
  ]
})
export class DetailPlantComponent implements OnInit {

  plantList: Plant [];
  currentPlant : Plant | undefined;

  constructor(private route : ActivatedRoute, private router: Router ){}

  ngOnInit() {
    this.plantList = PLANTS;
    const plantId : string | null = this.route.snapshot.paramMap.get('id');
    if(plantId) {
      this.currentPlant = this.plantList.find(plant => plant.id == +plantId)
    }
  }

  goBack() {
    this.router.navigate(['/plants']);
  }
}
