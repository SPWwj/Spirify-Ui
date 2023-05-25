import axios, { AxiosError } from 'axios';
import TokenService from 'authentication/TokenService';

class ApiManager {
    private static instance: ApiManager;
    private axiosInstance: any;
    static BASE_URL = 'https://localhost:7162';
    // static BASE_URL = 'https://spirify.azurewebsites.net/';
    // static BASE_URL = '';

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: ApiManager.BASE_URL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.axiosInstance.interceptors.request.use((config: any) => {
            const token = TokenService.getAccessToken();
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        }, (error: AxiosError) => {
            return Promise.reject(error);
        });

        this.axiosInstance.interceptors.response.use(undefined, async (error: AxiosError) => {
            if (error.config && error.response && error.response.status === 401 && !(error.config as any).__isRetryRequest) {
                const refreshToken = TokenService.getRefreshToken();
                if (refreshToken) {
                    try {
                        const token = await this.refreshToken(refreshToken);
                        // retry the request
                        (error.config as any).__isRetryRequest = true;
                        error.config.headers['Authorization'] = `Bearer ${token}`;
                        return this.axiosInstance.request(error.config);
                    } catch (refreshError) {
                        console.log(refreshError);
                    }
                }
            }
            return Promise.reject(error);
        });
    }

    public static getInstance(): ApiManager {
        if (!ApiManager.instance) {
            ApiManager.instance = new ApiManager();
        }
        return ApiManager.instance;
    }

    public getAxiosInstance() {
        return this.axiosInstance;
    }

    public async refreshToken(refreshToken: string): Promise<string> {
        const response = await this.axiosInstance.post('/api/account/refresh_token', { refreshToken });
        TokenService.storeToken(response.data.access_token, response.data.refresh_token);
        const token = TokenService.getAccessToken();
        return token!;
    }
}

export default ApiManager;
