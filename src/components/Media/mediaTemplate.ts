/**
 * Created by funkp on 22.07.2016.
 */
export const mediaTemplate = `
<div class="gallery">
    <div *ngFor="let image of media">
        <img (click)="selectMedia(image)" src="{{image.media_details.sizes.medium.source_url}}" alt="">    
</div>
</div>
<div class="inLineGallery">
    <img *ngFor="let image of media" (click)="selectMedia(image)" src="{{image.media_details.sizes.medium.source_url}}" alt="">    
</div>
<div *ngIf="activeMedia">
    <img (click)="close(image)" src="{{activeMedia}}" alt="">
</div>
`;