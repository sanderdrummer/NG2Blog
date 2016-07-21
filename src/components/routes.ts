/**
 * Created by funkp on 21.07.2016.
 */

import {provideRouter, RouterConfig} from '@angular/router'
import {Home} from './Home/Home';
import {Posts} from './Posts/Posts';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'posts',
        component: Posts
    }
];

export const routerProviders = [
    provideRouter(routes)
];