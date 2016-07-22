/**
 * Created by funkp on 21.07.2016.
 */
import { Component, OnInit } from '@angular/core';
import {PostsTemplate} from './PostsTemplate';
import {PostsService} from './PostsService';
import {ActivatedRoute} from '@angular/router';
import {SearchBox} from '../Search/searchBox';

@Component({
    selector: 'posts',
    template: PostsTemplate,
    providers: [PostsService],
    directives: [SearchBox]
})
export class Posts implements OnInit {
    public postList: Object[];
    public pages: any;
    public page:number;
    public loading:boolean;
    public category:string;
    public search:string;

    constructor(private route:ActivatedRoute, private postsService:PostsService) {
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

    ngOnInit() {
        this.getPosts(1)
    }

    getPosts(page:number) {

        this.loading = true;
        this.postsService.getPosts(this.category, page, this.search)
            .subscribe((res) =>{
                this.pages = res.headers.get('X-WP-TotalPages');
                this.postList = this.postList.concat(res.json());

            },
            (err) => console.log(err),
            () => {
                this.loading = false;
            }
        );
    }

    nextPage() {
        this.page +=1;
        this.getPosts(this.page);
    }
}