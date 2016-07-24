/**
 * Created by funkp on 21.07.2016.
 */
export const PostsTemplate = `
<div *ngIf="loading" class="loader"></div>
<search-box></search-box>
<div class="postListWrapper">
    <ul class="postList">
        <li class="listItem" @loadingState="active" *ngFor="let post of postList;  let i = index">
            <a class="listItemTitle" [routerLink]="['post', post.id]">{{post.title.rendered}}</a>
            <img class="listItemMedia" *ngIf="post.featured_media" src="{{post.featured_media}}" alt="">
            <div class="listItemContent" [innerHTML]="post.excerpt.rendered"></div>
        </li>
        
        <div class="listItemPaging" *ngIf="page < pages" (click)="nextPage()">mehr Posts</div>
    </ul>
</div>
<router-outlet></router-outlet>
`;