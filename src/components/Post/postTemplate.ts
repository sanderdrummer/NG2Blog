export const postTemplate = `
asdf {{post | json}}
<div *ngIf="post && post.title">
        <h1>{{post.title.rendered}}</h1>
        <div [innerHTML]="post.content.rendered"></div>
</div>
`;