export const postTemplate = `
<div class="fixedContainer" *ngIf="post && post.title">
        <h1>{{post.title.rendered}}</h1>
        <div [innerHTML]="post.content.rendered"></div>
        <div (click)="back()">zurück</div>
</div>
`;