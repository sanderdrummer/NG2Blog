/**
 * Created by funkp on 22.07.2016.
 */
export const mediaTemplate = `
<div class="inLineGallery">
    <img *ngFor="let image of media" (click)="selectMedia(image)" src="{{image.media_details.sizes.full.source_url}}" alt="">    
</div>
<div *ngIf="activeMedia">
    <img (click)="close(image)" src="{{activeMedia}}" alt="">
</div>
`;