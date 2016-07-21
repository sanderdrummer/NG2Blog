import {enableProdMode}  from '@angular/core';
import {bootstrap}       from '@angular/platform-browser-dynamic'
import {JSONP_PROVIDERS, HTTP_PROVIDERS} from '@angular/http';
import {AppComponent}    from './app/app.component'
import {routerProviders} from './components/routes';

enableProdMode();

bootstrap(AppComponent, [JSONP_PROVIDERS, HTTP_PROVIDERS, routerProviders]);
