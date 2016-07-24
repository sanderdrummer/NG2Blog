import {Component, style, state, animate, transition, trigger} from '@angular/core';
import {Control} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import {SelectedPostService} from '../components/Post/postService';
import {SearchBox} from '../components/Search/searchBox';

@Component({
    selector: 'app',
    animations: [
        trigger('loadingState', [
            state('inactive', style({transform: 'translateX(0) scale(1)'})),
            state('active',   style({transform: 'translateX(0) scale(1.1)'})),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out')),
            transition('void => inactive', [
                style({transform: 'translateX(-100%) scale(1)'}),
                animate(100)
            ]),
            transition('inactive => void', [
                animate(100, style({transform: 'translateX(100%) scale(1)'}))
            ]),
            transition('void => *', [
                style({transform: 'translateX(0) scale(0)'}),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({transform: 'translateX(0) scale(0)'}))
            ])
        ])
    ],

    template: `<div class="container">
    <nav @loadingState="test" >
        <a href=""></a>
        <a [routerLink]="['/home']">Home</a>
        <a [routerLink]="['/posts', 'blog']">Blog</a>
        <a [routerLink]="['/posts', 'band']">Band</a>
        <a [routerLink]="['/posts','gigs']">Gigs</a>
        <a [routerLink]="['/page/2']">Test</a>
        <a [routerLink]="['/media']">Medien</a>
</nav>

<search-box></search-box>
    <router-outlet></router-outlet>
</div>`,
    directives: [ROUTER_DIRECTIVES, SearchBox],
    providers: [SelectedPostService]
})
export class AppComponent {

  constructor(private router:Router) {
      router.events.subscribe((event:any) => {
          if (event instanceof RoutesRecognized ) {
              document.body.className = '';
              event.url.split('/').forEach((className) => {
                  if (className) {
                      document.body.classList.add(className);
                  }
              });
          }
      })
  }
}
