export interface IVideo {
    id: string,
    text: string,
    author: { name: string }
    videoUrl: string,
    imageUrl?: string,
    views?: number
}

export class Video implements IVideo {

    id: string;
    text: string;
    author: { name: string; };
    videoUrl: string;
    imageUrl?: string;
    views?: number;

    constructor({ id, text, author, videoUrl, imageUrl, views }: IVideo) {
        this.id = id;
        this.text = text;
        this.author = author;
        this.videoUrl = videoUrl;
        this.imageUrl = imageUrl;
        this.views = views ?? 0;
    }
}