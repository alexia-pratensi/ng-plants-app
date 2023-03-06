import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
   template: `
    <div class='center'>
      <h3>Hey, cette page n'existe pas !</h3>
      <a routerLink="/plants" class="waves-effect waves-teal btn-flat">Retourner à l' accueil</a>
      <br>
      <img src="../../assets/images/pagenotfound2.jpg"/>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
