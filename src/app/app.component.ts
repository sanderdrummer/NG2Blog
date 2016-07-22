import {Component} from '@angular/core';
import {Control} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'app',
    template: `<div class="container">
    <nav>
        <a href=""></a>
        <a [routerLink]="['/home']">Home</a>
        <a [routerLink]="['/posts']">Posts</a>
        <a [routerLink]="['/posts', 'Band']">Band</a>
        <a [routerLink]="['/posts','Gigs']">Gigs</a>
        <a [routerLink]="['/page/2']">Test</a>
        <a [routerLink]="['/media']">Medien</a>
</nav>
    <router-outlet></router-outlet>
</div>`,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

  constructor() {}
}
