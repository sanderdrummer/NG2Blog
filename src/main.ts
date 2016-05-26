import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NG2BlogAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NG2BlogAppComponent);
