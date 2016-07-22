/**
 * Created by funkp on 22.07.2016.
 */
import { Component, OnInit } from '@angular/core';
import {pageTemplate} from './pageTemplate';
import {PageService} from './pageService';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'page',
    template: pageTemplate,
    providers: [PageService]
})
export class Page implements OnInit {

    public page:{};
    public loading:boolean;

    constructor(private route:ActivatedRoute, private pageService:PageService) {
        route.params.subscribe((params:any) => {
            this.page = {};
            this.loading = true;
            pageService.getPage(params.id)
            .subscribe((res) => {
                this.page = res.json();
            });
        });
    }

    ngOnInit() {}

}