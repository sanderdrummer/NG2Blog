/**
 * Created by funkp on 21.07.2016.
 */
export const PostsTemplate = `
    <div *ngIf="loading">LADDEEEE</div>
    <search-box></search-box>
    <H1>Das ist ein Test</H1>
    <search-box></search-box>
    <p>ganz viele Posts</p>
    {{pages}}
<ul>
    <li *ngFor="let post of postList;  let i = index">
    <a [routerLink]="['post', post.id]">{{i}} {{post.title.rendered}}</a>
    <div [innerHTML]="post.excerpt.rendered"></div>
    </li>
    
    <div *ngIf="page < pages" (click)="nextPage()">mehr Posts</div>
</ul>
<router-outlet></router-outlet>
<post [post]="selectedPost.post"></post>
`;