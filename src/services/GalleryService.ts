// GalleryService.ts
import ApiManager from './ApiManager';

class GalleryService {
    private axiosInstance: any;

    constructor() {
        this.axiosInstance = ApiManager.getInstance().getAxiosInstance();
    }

    async getGallery(category: string, page: number) {
        const response = await this.axiosInstance.get(`/api/${category}/page/${page}`);
        return response.data;
    }
}

const galleryService = new GalleryService();
export default galleryService;
