export interface IVideo {
    id: string,
    text: string,
    author: string,
    videoUrl: string,
    formats?: any[],
    imageUrl?: string,
    views?: number
}