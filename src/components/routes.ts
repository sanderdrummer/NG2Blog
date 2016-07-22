/**
 * Created by funkp on 21.07.2016.
 */

import {provideRouter, RouterConfig} from '@angular/router'
import {Home} from './Home/Home';
import {Posts} from './Posts/Posts';
import {Page} from './Page/page';
import {Media} from './Media/Media';

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
    },
    {
        path: 'posts/:category',
        component: Posts
    },
    {
        path: 'search/:search',
        component: Posts
    },
    {
        path: 'media',
        component: Media
    },
    {
        path: 'page/:id',
        component: Page
    }
];

export const routerProviders = [
    provideRouter(routes)
];