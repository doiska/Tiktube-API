import YTDlpWrap from 'yt-dlp-wrap';
import { IVideo } from "../interfaces/Video";

export default class DLController {

    private downloader!: YTDlpWrap;

    constructor() {
        (async () => {
            try {
                await YTDlpWrap.downloadFromGithub();
                this.downloader = new YTDlpWrap('./yt-dlp');
            } catch (e) {
                console.error(e);
            }
        })()
    }

    async fetchVideoByAddress(address: string): Promise<IVideo | string> {
        try {
            const result = await this.downloader.getVideoInfo(address);
            const { id, title, uploader, url, thumbnail, view_count, formats, height, width, fileName } = result;

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
                width: width,
                fileName: fileName
            } as IVideo;
        } catch (error) {
            console.log(error);
            return 'Não foi possível processar o vídeo.';
        }
    }
}