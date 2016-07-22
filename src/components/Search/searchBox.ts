import { Component, OnInit } from '@angular/core';
import {searchBoxTemplate} from './searchBoxTemplate';
import {Router} from '@angular/router';

@Component({
    selector: 'search-box',
    template: searchBoxTemplate,
    directives: []
})
export class SearchBox implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() {}

    submitSearch(query:string) {
        this.router.navigate(['search/'+query])
    }

}