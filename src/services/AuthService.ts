import TokenService from "authentication/TokenService";
import ApiManager from "./ApiManager";

export interface OAuthRequestModel {
    username: string;
    password: string;
    responseType: string;
    clientId: string;
    redirectUri: string;
    scope: string;
}
export interface IAuthService {
    login: (username: string, password: string, rememberMe: boolean) => Promise<any>;
    oauthLogin: (OAuthModel: OAuthRequestModel) => Promise<any>;

    logout: () => void;
    register: (username: string, email: string, password: string) => Promise<any>;
}
class AuthService implements IAuthService {
    private axiosInstance: any;

    constructor() {
        this.axiosInstance = ApiManager.getInstance().getAxiosInstance();
    }

    async login(username: string, password: string, rememberMe: boolean) {
        try {
            const response = await this.axiosInstance.post('/api/account/login', {
                username,
                password,
            });

            if (response.data.access_token && response.data.refresh_token) {
                TokenService.setToken(response.data.access_token, response.data.refresh_token, rememberMe);
            }

            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    async oauthLogin(OAuthModel: OAuthRequestModel) {
        try {
            const response = await this.axiosInstance.post('/api/Account/oauth', OAuthModel);
            if (response.status === 200) {
                const responseData = response.data;
                if (responseData?.redirectUrl) {
                    window.location.href = responseData.redirectUrl;
                } else {
                    console.log("RedirectUrl is null or missing", response);
                }
            } else {
                console.log("Login failed", response);
            }
        } catch (error) {
            console.error(error);
            // handle error accordingly
        }
    }


    logout() {
        TokenService.clearToken();
    }

    async register(username: string, email: string, password: string) {
        return await this.axiosInstance.post('/api/account/register', {
            username,
            email,
            password,
        });
    }
}

const authService = new AuthService();
export default authService;
