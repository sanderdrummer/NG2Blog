/**
 * Created by funkp on 21.07.2016.
 */
import { Component, OnInit } from '@angular/core';
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
    directives: [ROUTER_DIRECTIVES, Post, SearchBox]
})
export class Posts implements OnInit {
    public postList: Object[];
    public pages: any;
    public page:number;
    public loading:boolean;
    public category:string;
    public search: string;

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
}