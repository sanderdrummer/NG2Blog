import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './shared/post';


@Injectable()
export class WpApiServiceService {

  http:Http;
  constructor(http:Http) {
      this.http = http;
  }

  getPosts(category) {
      return this.http
          .get('http://localhost:3000/wordpress/wp-json/wp/v2/posts?category=' + category)
          .map(res => res.json().map((rawPost) => new Post(rawPost)));

          // .share();
  }

  getPage(id) {
      return this.http
          .get('http://localhost:3000/wordpress/wp-json/wp/v2/pages/' + id)
          .map(res => new Post(res.json()));
          // .share();
  }

  getPost(id) {
      return this.http
          .get('http://localhost:3000/wordpress/wp-json/wp/v2/posts/' + id)
          .map(res => new Post(res.json()));
          // .share();
  }
}
