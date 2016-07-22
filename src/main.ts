import {enableProdMode}  from '@angular/core';
import {bootstrap}       from '@angular/platform-browser-dynamic'
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent}    from './app/app.component'
import {routerProviders} from './components/routes';

enableProdMode();

bootstrap(AppComponent, [HTTP_PROVIDERS, routerProviders]);
