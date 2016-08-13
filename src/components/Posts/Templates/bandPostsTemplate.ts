export const bandPostsTemplate = `
    <div *ngIf="loading">LADDEEEE</div>
    <H1>Das ist ein Test</H1>
    <search-box></search-box>
    <p>ganz viele Posts</p>
    {{pages}}
    <ul>
    <li *ngFor="let post of postList">
    <a (click)="selectPost(post)" href="#{{post.id}}">{{post.title.rendered}}</a>
    <div [innerHTML]="post.excerpt.rendered"></div>
    </li> 
    
    <div *ngIf="page < pages" (click)="nextPage()">mehr Posts</div>
</ul>
`;