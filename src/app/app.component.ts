import {Component} from '@angular/core';
import {Control} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {WikipediaService} from '../service/wikipedia.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'app',
    template: `<div class="container">
    <nav>
        <a href=""></a>
        <a [routerLink]="['/home']">Home</a>
        <a [routerLink]="['/posts']">Posts</a>
</nav>
    <router-outlet></router-outlet>
</div>`,
    providers: [WikipediaService],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  items: Observable<Array<string>>;
  term = new Control();

  constructor(private wikipediaService: WikipediaService) {
    this.items = wikipediaService.search(this.term.valueChanges);
  }
}
