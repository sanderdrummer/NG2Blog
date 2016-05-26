import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map'
import { enableProdMode } from '@angular/core';
import { NG2BlogAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NG2BlogAppComponent, [HTTP_PROVIDERS]);
