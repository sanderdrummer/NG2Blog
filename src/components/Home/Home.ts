/**
 * Created by funkp on 21.07.2016.
 */
import {Component, OnInit, style, state, animate, transition, trigger} from '@angular/core';
import {HomeTemplate} from './HomeTemplate';

@Component({
    selector: 'home',
    template: HomeTemplate,
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
export class Home implements OnInit {
    constructor() { }

    ngOnInit() { }

}