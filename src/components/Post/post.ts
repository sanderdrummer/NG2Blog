/**
 * Created by funkp on 23.07.2016.
 */
import {Component, OnInit, Input} from '@angular/core';
import {postTemplate} from './postTemplate';
import {SelectedPostService} from './postService';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'post',
    template: postTemplate,
    inputs: ['post']
})
export class Post implements OnInit {
    public post: {};
    constructor(private router:ActivatedRoute, private selectedPost:SelectedPostService) {
        this.post = {};
        router.params.subscribe((params:any) =>{
            if (selectedPost && selectedPost.postList && selectedPost.postList.length) {
                this.post = selectedPost.postList.reduce((acc, post) =>{
                    if (post.id === Number(params.id)) {
                        acc = post;
                    }
                    return acc;
                }, this.post);
           } else {
             // todo fetch post
           }
        });
    }

    ngOnInit() {
    }
}