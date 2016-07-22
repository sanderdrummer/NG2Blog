/**
 * Created by funkp on 21.07.2016.
 */
export const PostsTemplate = `
    <div *ngIf="loading">LADDEEEE</div>
    <H1>Das ist ein Test</H1>
    <search-box></search-box>
    <p>ganz viele Posts</p>
    {{pages}}
    <ul>
    <li *ngFor="let post of postList">
    {{post.title.rendered}}
    <div [innerHTML]="post.excerpt.rendered"></div>
    </li>
    
    <div *ngIf="page < pages" (click)="nextPage()">mehr Posts</div>
</ul>
`;