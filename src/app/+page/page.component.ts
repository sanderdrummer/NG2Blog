import { Component, OnInit, Inject } from '@angular/core';
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
  constructor(wpApiServiceService:WpApiServiceService) {
    this.wpApiServiceService = wpApiServiceService;
      this.page = new Post({});
  }

  ngOnInit() {
      this.wpApiServiceService.getPage(2).subscribe((res) => {this.page = res; console.log(this.page );});

  }
}
