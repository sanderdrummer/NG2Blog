/**
 * Created by funkp on 21.07.2016.
 */
import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {wpConfig} from '../../shared/wp.config';

@Injectable()
export class PostsService {

    constructor(private http:Http) { }

    getPosts (category:string = '', page:number = 1, query:string = '') {
        const search = new URLSearchParams();

        if (category) {
            search.set('filter[category_name]', category);
        }

        if (query) {
            search.set('search', query);
        }

        search.set('page', page.toString());

        return this.http.get(wpConfig.baseUrl + 'posts', {search});
    }

}