import "@angular/platform-browser-dynamic";
import "@angular/common";
import "@angular/core";
import "@angular/http";
import "@angular/router";

// if we want everything from RxJS ...
// import 'rxjs';

// otherwise, for a smaller bundle just what we use:
import "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
