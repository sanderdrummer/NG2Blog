import { Injectable } from '@angular/core';

@Injectable()
export class AppCache {
    private cache: {};
    constructor() { }

    get(url:string, params:Object) {
        const key = this.getKey(url, params);
        if (this.cache[key]) {
            return this.cache[key];
        } else {
            return false;
        }
    }

    set(url:string, params:Object, item) {
        const key = this.getKey(url, params);
        this.cache[key] = item;
    }

    getKey(url:string, params:Object) {
        for (param in params) {
            console.log(param);
        }

        return url;
    }
}