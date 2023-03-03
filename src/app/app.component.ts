import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1> Welcome to {{plantList[1]}}!</h1>`
})
export class AppComponent implements OnInit{
  plantList= ['Astrantia', 'Allium', 'Angelonia'];

  ngOnInit() {
    console.table(this.plantList)
    this.selectPlant('Allium')
  }

  selectPlant(plantName: string) {
    console.log(`Vous avez cliqué sur la plante ${plantName}`)
  }

}
