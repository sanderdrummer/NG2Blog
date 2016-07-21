/**
 * Created by funkp on 21.07.2016.
 */
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {wpConfig} from '../../shared/wp.config';

@Injectable()
export class PostsService {

    constructor(private http:Http) { }

    getPosts (category) {
        return this.http.get(wpConfig.baseUrl + 'posts')
            .map((request) => request.json())
    }

}