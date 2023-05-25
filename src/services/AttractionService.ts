import ApiManager from './ApiManager';

class AttractionService {
    private axiosInstance: any;

    constructor() {
        this.axiosInstance = ApiManager.getInstance().getAxiosInstance();
    }

    async addAttraction(attractionData: any) {
        const response = await this.axiosInstance.post('/api/attraction/add', attractionData);
        return response.data;
    }

    async getAttraction(id: string) {
        const response = await this.axiosInstance.get(`/api/attraction/${id}`);
        return response.data;
    }

    async deleteAttraction(id: string) {
        const response = await this.axiosInstance.delete(`/api/attraction/${id}`);
        return response.data;
    }
}

const attractionService = new AttractionService();
export default attractionService;
