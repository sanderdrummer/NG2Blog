import {Component, OnInit, style, animate, transition, state, trigger} from '@angular/core';
import {searchBoxTemplate} from './searchBoxTemplate';
import {Router} from '@angular/router';

@Component({
    selector: 'search-box',
    template: searchBoxTemplate,
    directives: [],
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