import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../shared/post';
import { WpApiServiceService } from '../wp-api-service.service';
import { RouteSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css'],
  providers: [WpApiServiceService],


})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() excerpt: boolean;
  id: string;
  err: string;

    constructor(public wpApiServiceService:WpApiServiceService) {
    this.id= '0';
    this.err = '';

    }
    routerOnActivate(curr: RouteSegment) {
        this.id = curr.getParam('id');
    }
  ngOnInit() {
      if(!this.post) {
          this.post = new Post({});
          this.wpApiServiceService.getPost(this.id)
              .subscribe(
                  (res) => {this.post = res;},
                  (err) => {this.err = `Fehler ${err.status} :(` || 'Fehler :(';}
              );
      }
  }

  showContent(){
    this.excerpt = false;
  }

}
