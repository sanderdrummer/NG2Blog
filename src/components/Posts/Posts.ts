/**
 * Created by funkp on 21.07.2016.
 */
import { Component, OnInit } from '@angular/core';
import {PostsTemplate} from './PostsTemplate';

@Component({
    selector: 'posts',
    template: PostsTemplate
})
export class Posts implements OnInit {
    constructor() { }

    ngOnInit() { }

}