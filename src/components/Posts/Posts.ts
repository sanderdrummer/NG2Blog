/**
 * Created by funkp on 21.07.2016.
 */
import { Component, OnInit } from '@angular/core';
import {PostsTemplate} from './PostsTemplate';
import {PostsService} from './PostsService';

@Component({
    selector: 'posts',
    template: PostsTemplate,
    providers: [PostsService]
})
export class Posts implements OnInit {
    public postList: Object[];
    constructor(private postsService:PostsService) { }

    ngOnInit() {
        this.postsService.getPosts('')
            .subscribe((list) =>{
                this.postList = list;
            });
    }

}