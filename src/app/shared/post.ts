export class Post{

    id: number;
    title: string;
    content: string;
    excerpt: string;
    image: string;

    constructor(config: any){
        this.id = config && config.id || 0;
        this.title = config && config.title && config.title.rendered || '';
        this.content = config && config.content &&
            config.content.rendered || '';
        this.excerpt = config && config.excerpt &&
            config.excerpt.rendered || '';
        this.image = config && config.featured_media || '';
    }
}