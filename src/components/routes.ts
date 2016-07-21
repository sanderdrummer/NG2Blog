/**
 * Created by funkp on 21.07.2016.
 */

import {provideRouter, RouterConfig} from '@angular/router'
import {Home} from './Home/Home';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    }
];

export const routerProviders = [
    provideRouter(routes)
];