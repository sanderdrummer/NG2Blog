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
    loading: boolean;
    page: number;
  constructor(wpApiServiceService:WpApiServiceService) {
      this.wpApiServiceService = wpApiServiceService;
      this.posts =[];
      this.err = '';
      this.page = 1;
  }
  loadPosts(){
    this.wpApiServiceService.getPosts(this.category, this.page)
          .subscribe(
        (res) => { 
          this.posts = this.posts.concat(res);
          if (res.length) {
            this.loading = false; 
          }
        },
      (err) => { 
        this.err = `Fehler ${err.status} :(` || 'Fehler :('; 
        this.loading = false; 
      }
    );
  }
  ngOnInit() {
    this.loadPosts();
  }
  routerOnActivate(curr: RouteSegment) {
      this.category = curr.getParam('category');
  }
  loadOnScroll($event){
    if (!this.loading) {
      this.loading = true;  
      this.page += 1;
      this.loadPosts();
    }
  }
}
