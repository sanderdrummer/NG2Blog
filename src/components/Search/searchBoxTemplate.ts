export const searchBoxTemplate = `
    <input 
        (keydown.enter)="submitSearch(search.value)" 
        name="query" 
        #search
        placeholder="suche">
`;