import YTDlpWrap from 'yt-dlp-wrap';
import { IVideo } from "../interfaces/Video";

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
            const result = await this.downloader.getVideoInfo(address);
            const { id, title, uploader, url, thumbnail, view_count, formats, height, width } = result;

            console.log(result);
            return {
                id,
                text: title,
                author: uploader,
                videoUrl: url,
                imageUrl: thumbnail,
                views: view_count,
                formats: formats,
                height: height,
                width: width
            } as IVideo;
        } catch (error) {
            console.log(error);
            return 'Não foi possível processar o vídeo.';
        }
    }
}