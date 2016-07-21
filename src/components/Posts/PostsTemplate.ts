/**
 * Created by funkp on 21.07.2016.
 */
export const PostsTemplate = `
    <H1>Das ist ein Test</H1>
    <p>ganz viele Posts</p>
    
    <ul>
    <li *ngFor="let post of postList">
    {{post | json}}
</li>
</ul>
`;