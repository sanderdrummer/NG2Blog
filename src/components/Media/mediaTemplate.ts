/**
 * Created by funkp on 22.07.2016.
 */
export const mediaTemplate = `
<div>
    <img (click)="selectMedia(image)" *ngFor="let image of media" src="{{image.media_details.sizes.medium.source_url}}" alt="">    
</div>
<div *ngIf="activeMedia">
    <img (click)="close(image)" src="{{activeMedia}}" alt="">
</div>
`;