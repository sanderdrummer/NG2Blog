/**
 * Created by funkp on 21.07.2016.
 */
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import {PostsService} from './PostsService';
import {ActivatedRoute, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {SelectedPostService} from '../Post/postService';
import {PostsTemplate} from './PostsTemplate';
import {Post} from '../Post/post';
import {SearchBox} from '../Search/searchBox';

@Component({
    selector: 'posts',
    template: PostsTemplate,
    providers: [PostsService],
    directives: [ROUTER_DIRECTIVES, Post, SearchBox],
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
export class Posts implements OnInit {
    public postList: Object[];
    public pages: any;
    public page:number;
    public loading:boolean;
    public category:string;
    public search: string;
    public loadingState: string;

    constructor(private route:ActivatedRoute, private postsService:PostsService, public selectedPost:SelectedPostService) {
        this.loading = false;
        this.postList = [];
        this.page = 1;
        route.params.subscribe((params:any) =>{
            this.postList = [];
            this.category = params.category;
            this.search = params.search;
            this.getPosts(1)
        });
    }

    ngOnInit() {}

    getPosts(page:number) {

        this.loading = true;
        this.postsService.getPosts(this.category, page, this.search)
            .subscribe((res) =>{
                    this.pages = res.headers.get('X-WP-TotalPages');
                    this.postList = this.postList.concat(res.json());
                    this.selectedPost.postList = this.postList;
                },
                (err) => console.log(err),
                () => {
                    this.loading = false;
                }
            );
    }

    selectPost(post, index) {
        this.selectedPost.post = this.postList[index] || post || {};
    }

    nextPage() {
        this.page +=1;
        this.getPosts(this.page);
    }

    handleBodyClasses() {

        document.body.className = '';

        if (this.search) {
            document.body.classList.add('search');
        }
        if (this.category) {
            document.body.classList.add(`category${this.category}`);
        }
    }
}