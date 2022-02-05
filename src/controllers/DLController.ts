import YTDlpWrap from 'yt-dlp-wrap';
import { IVideo, Video } from "../interfaces/Video";

export default class DLController {

    private downloader!: YTDlpWrap;

    constructor() {
        (async () => {
            // await YTDlpWrap.downloadFromGithub();
            this.downloader = new YTDlpWrap('./yt-dlp.exe');

            if(!this.downloader)
                return console.log(`Could'nt instanciate YTDLWrapper`);
        })()
    }

    async fetchVideoByAddress(address: string): Promise<IVideo | string> {
        try {
            console.log(`Address ${address}`)
            const result = await this.downloader.getVideoInfo(address);
            const { id, title, uploader, url, thumbnail, view_count } = result;

            console.log(title);
            return new Video({
                id,
                text: title,
                author: { name: uploader },
                videoUrl: url,
                imageUrl: thumbnail,
                views: view_count
            })
        } catch (error) {
            console.log(error);
            return 'Não foi possível processar o vídeo.';
        }
    }
}