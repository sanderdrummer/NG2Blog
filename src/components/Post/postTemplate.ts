export const postTemplate = `
<div class="fixedContainer" *ngIf="post && post.title">
    <div class="postContainer">
        <h1 class="postTitle">{{post.title.rendered}}</h1>
        <img class="postMedia" *ngIf="post.featured_media" src="{{post.featured_media}}" alt="">
        <div class="postContent" [innerHTML]="post.content.rendered"></div>
        <div class="paging" (click)="back()">zurück</div>
    </div>

</div>
`;