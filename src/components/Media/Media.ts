/**
 * Created by funkp on 22.07.2016.
 */
import { Component, OnInit } from '@angular/core';
import {mediaTemplate} from './mediaTemplate';
import {MediaService} from './mediaService';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'gallery',
    template: mediaTemplate,
    providers: [MediaService]
})
export class Media implements OnInit {

    public media: Object[];

    constructor(private mediaService:MediaService, router:ActivatedRoute) {

        router.params.subscribe((params:any) => {
            this.media = [];
            mediaService.getMedia().subscribe((res) => {
                console.log(res);
                this.media = res.json();
            });
        });
    }

    ngOnInit() { }

}