import {Component} from '@angular/core';
import {Control} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {WikipediaService} from '../service/wikipedia.service';
import {Home} from '../components/Home/Home';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'app',
    template: `<div class="container">
    <h2>Wikipedia Search</h2>
    <input type="text" [ngFormControl]="term"/>
    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
    <router-outlet></router-outlet>
</div>`,
    providers: [WikipediaService],
    directives: [Home, ROUTER_DIRECTIVES]
})
export class AppComponent {
  items: Observable<Array<string>>;
  term = new Control();

  constructor(private wikipediaService: WikipediaService) {
    this.items = wikipediaService.search(this.term.valueChanges);
  }
}
