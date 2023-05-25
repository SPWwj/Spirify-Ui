import ApiManager from "./ApiManager";

class EventService {
    private axiosInstance: any;

    constructor() {
        this.axiosInstance = ApiManager.getInstance().getAxiosInstance();
    }

    async createEvent(values: any) {
        const response = await this.axiosInstance.post('/api/Event', values);
        return response.data;
    }

    async getEvent(id: string) {
        const response = await this.axiosInstance.get(`/api/Event/${id}`);
        return response.data;
    }

    async deleteEvent(id: string) {
        const response = await this.axiosInstance.delete(`/api/Event/${id}`);
        return response.data;
    }

    async joinEvent(id: string) {
        const response = await this.axiosInstance.post(`/api/Event/Join/${id}`);
        return response.data;
    }
}

const eventService = new EventService();
export default eventService;
