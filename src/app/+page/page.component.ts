import { Component, OnInit, Inject } from '@angular/core';
import { RouteSegment } from '@angular/router';

import { WpApiServiceService } from '../wp-api-service.service';
import { Post } from '../shared/post';

@Component({
  moduleId: module.id,
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css'],
  providers: [WpApiServiceService],
})
export class PageComponent implements OnInit {
  wpApiServiceService:WpApiServiceService;
  page:Post;
  id: string;
  err: string;
  constructor(wpApiServiceService:WpApiServiceService) {
    this.wpApiServiceService = wpApiServiceService;
      this.page = new Post({});
      this.err = '';
      // this.id = routeParams.get('id') || 2;
  }
    routerOnActivate(curr: RouteSegment) {
        this.id = curr.getParam('id');
    }
  ngOnInit() {
      this.wpApiServiceService.getPage(this.id)
          .subscribe(
              (res) => {this.page = res;},
              (err) => {this.err = `Fehler ${err.status} :(` || 'Fehler :(';}
          );

  }
}
