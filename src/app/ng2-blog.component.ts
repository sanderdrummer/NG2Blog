import { Component } from '@angular/core';
import { PageComponent } from './+page';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { PostComponent } from './+post';
import { PostsComponent } from './+posts';

@Component({
  moduleId: module.id,
  selector: 'ng2-blog-app',
  templateUrl: 'ng2-blog.component.html',
  styleUrls: ['ng2-blog.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/page', component: PageComponent},
  {path: '/post', component: PostComponent},
  {path: '/posts', component: PostsComponent}
])
export class NG2BlogAppComponent {
  title = 'ng2-blog works!';
}
