/**
 * Created by funkp on 21.07.2016.
 */

import {provideRouter, RouterConfig} from '@angular/router'
import {Home} from './Home/Home';
import {Posts} from './Posts/Posts';
import {Page} from './Page/page';
import {Media} from './Media/Media';
import {Post} from './Post/post';

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
    // {
    //     path: 'post/:id',
    //     component: Post,
    //     children: [
    //         {path: '', component: Post},
    //         {path: 'post/:id', component: Post}
    //     ]
    // },
    {
        path: 'posts/:category',
        component: Posts,
        children: [
            {path: '', component: Post},
            {path: 'post/:id', component: Post}
        ]
    },
    {
        path: 'search/:search',
        component: Posts,
        children: [
            {path: '', component: Post},
            {path: 'post/:id', component: Post}
        ]
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