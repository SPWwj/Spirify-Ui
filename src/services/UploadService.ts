// UploadService.ts
import ApiManager from './ApiManager';

class UploadService {
    static async uploadFile(file: File) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await ApiManager.getInstance().getAxiosInstance().post('/api/Upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    }

    static async deleteFile(fullUrl: string) {
        const filePath = fullUrl.replace(ApiManager.BASE_URL, "");

        const response = await ApiManager.getInstance().getAxiosInstance().delete(`/api/upload?filePath=${filePath}`);
        return response.data;
    }
}

export default UploadService;
