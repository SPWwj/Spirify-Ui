import ApiManager from "./ApiManager";

class SharingService {
    private axiosInstance: any;

    constructor() {
        this.axiosInstance = ApiManager.getInstance().getAxiosInstance();
    }

    async createItem(values: any) {
        const response = await this.axiosInstance.post('/api/Sharing', values);
        return response.data;
    }
    async getSharingItem(id: string) {
        const response = await this.axiosInstance.get(`/api/Sharing/${id}`);
        return response.data;
    }
    async deleteSharingItem(id: string) {
        const response = await this.axiosInstance.delete(`/api/Sharing/${id}`);
        return response.data;
    }
    async borrowItem(id: string) {
        const response = await this.axiosInstance.post(`/api/Sharing/${id}/borrow`);
        return response.data;
    }

    async returnItem(id: string) {
        const response = await this.axiosInstance.post(`/api/Sharing/${id}/return`);
        return response.data;
    }
}

const sharingService = new SharingService();
export default sharingService;
