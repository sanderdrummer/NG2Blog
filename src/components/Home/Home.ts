/**
 * Created by funkp on 21.07.2016.
 */
import { Component, OnInit } from '@angular/core';
import {HomeTemplate} from './HomeTemplate';

@Component({
    selector: 'home',
    template: HomeTemplate
})
export class Home implements OnInit {
    constructor() { }

    ngOnInit() { }

}