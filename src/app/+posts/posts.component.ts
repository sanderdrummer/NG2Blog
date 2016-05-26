import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';

import { WpApiServiceService } from '../wp-api-service.service';
import { PostComponent } from '../+post/';
import { Post } from '../shared/post';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css'],
  directives: [PostComponent],
  providers: [WpApiServiceService],

})
export class PostsComponent implements OnInit {
    wpApiServiceService:WpApiServiceService;
    posts: Post[];
    category: string;
    err: string;
  constructor(wpApiServiceService:WpApiServiceService) {
      this.wpApiServiceService = wpApiServiceService;
      this.posts =[];
      this.err = '';
  }

  ngOnInit() {
      this.wpApiServiceService.getPosts(this.category)
          .subscribe(
              (res) => {this.posts = res;},
              (err) => {this.err = `Fehler ${err.status} :(` || 'Fehler :(';}
          );
  }
    routerOnActivate(curr: RouteSegment) {
        this.category = curr.getParam('category');
    }
}
