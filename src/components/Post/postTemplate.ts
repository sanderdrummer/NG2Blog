export const postTemplate = `
<div class="post" *ngIf="post && post.title">
        <h1>{{post.title.rendered}}</h1>
        <div [innerHTML]="post.content.rendered"></div>
</div>
`;