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
    public activeMedia: {};

    constructor(private mediaService:MediaService, router:ActivatedRoute) {

        router.params.subscribe((params:any) => {
            this.media = [];
            mediaService.getMedia().subscribe((res) => {
                this.media = res.json();
            });
        });
    }

    ngOnInit() { }

    selectMedia(image){
        this.activeMedia = image.media_details.sizes.full.source_url;
    }

    close(){
        this.activeMedia = null;
    }
}