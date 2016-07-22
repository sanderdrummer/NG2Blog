/**
 * Created by funkp on 22.07.2016.
 */
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {wpConfig} from '../../shared/wp.config';

@Injectable()
export class MediaService {

    constructor(private http:Http) {}

    getMedia() {
        return this.http.get(wpConfig.baseUrl + 'media');
    }

}