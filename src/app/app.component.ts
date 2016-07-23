import {Component} from '@angular/core';
import {Control} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import {SelectedPostService} from '../components/Post/postService';

@Component({
    selector: 'app',
    template: `<div class="container">
    <nav>
        <a href=""></a>
        <a [routerLink]="['/home']">Home</a>
        <a [routerLink]="['/posts', 'blog']">Blog</a>
        <a [routerLink]="['/posts', 'band']">Band</a>
        <a [routerLink]="['/posts','gigs']">Gigs</a>
        <a [routerLink]="['/page/2']">Test</a>
        <a [routerLink]="['/media']">Medien</a>
</nav>
    <router-outlet></router-outlet>
</div>`,
    directives: [ROUTER_DIRECTIVES],
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
