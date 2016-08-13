export const searchBoxTemplate = `
<div (keydown.esc)="closeSearch()">
    <div (click)="showSearch()"> Suche </div>
    <div @loadingState="show" *ngIf="show">
        <input 
        (keydown.enter)="submitSearch(search.value)" 
        name="query" 
        #search
        placeholder="suche">
    </div>
</div>
`;