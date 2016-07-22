import { Component, OnInit } from '@angular/core';
import {searchBoxTemplate} from './searchBoxTemplate';
import {Router} from '@angular/router';

@Component({
    selector: 'search-box',
    template: searchBoxTemplate,
    directives: []
})
export class SearchBox implements OnInit {
    public show:boolean;
    constructor(private router:Router) {
        this.show = false;
    }

    ngOnInit() {}

    submitSearch(query:string) {
        this.router.navigate(['search/'+query])
        this.show = false;
    }

    showSearch(){
        this.show = !this.show;
    }

    hideSearch(){
        this.show = false;
    }

}