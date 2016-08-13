/**
 * Created by funkp on 23.07.2016.
 */
import {Component, OnInit, Input, style, state, animate, transition, trigger} from '@angular/core';
import {postTemplate} from './postTemplate';
import {SelectedPostService} from './postService';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'post',
    template: postTemplate,
    inputs: ['post'],
    animations: [
        trigger('loadingState', [
            state('inactive', style({transform: 'translateX(0) scale(1)'})),
            state('active',   style({transform: 'translateX(0) scale(1.1)'})),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out')),
            transition('void => inactive', [
                style({transform: 'translateX(-100%) scale(1)'}),
                animate(100)
            ]),
            transition('inactive => void', [
                animate(100, style({transform: 'translateX(100%) scale(1)'}))
            ]),
            transition('void => *', [
                style({transform: 'translateX(0) scale(0)'}),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({transform: 'translateX(0) scale(0)'}))
            ])
        ])
    ]
})
export class Post implements OnInit {
    public post: {};
    constructor(private router:ActivatedRoute, private selectedPost:SelectedPostService) {
        this.post = {};
        router.params.subscribe((params:any) =>{
            if (!params.id) {
                document.body.classList.remove('noScroll');
            }

            if (selectedPost && selectedPost.postList && selectedPost.postList.length) {
                this.post = selectedPost.postList.reduce((acc, post) =>{
                    if (post.id === Number(params.id)) {
                        acc = post;
                        document.body.classList.add('noScroll');
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

    back() {
        window.history.back();
    }
}
