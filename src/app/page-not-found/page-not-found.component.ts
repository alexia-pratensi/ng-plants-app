import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
   template: `
    <div class='center container'>
      <h4>Hey, cette page n'existe pas !</h4>
      <a routerLink="/plants" class="waves-effect waves-teal btn-flat">↩  Retourner à l' accueil</a>
      <br>
      <img src="../../assets/images/notfound.png"/>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
