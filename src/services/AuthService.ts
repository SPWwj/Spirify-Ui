import TokenService from "authentication/TokenService";
import ApiManager from "./ApiManager";

export interface OAuthRequestModel {
    username: string;
    password: string;
    response_type: string;
    client_id: string;
    redirect_uri: string;
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
            // handle error accordingly
        }
    }
    async oauthLogin(OAuthModel: OAuthRequestModel) {
        try {
            const response = await this.axiosInstance.post('/api/Account/oauth', OAuthModel);
            console.log("The response is ", response);

            if (response.status === 200) {
                const responseData = response.data;

                if (responseData?.redirectUrl) {
                    console.log("RedirectUrl is to :", response.redirectUrl);

                    setTimeout(() => {
                        window.open(responseData.redirectUrl, '_blank');
                        window.location.href = responseData.redirectUrl;
                    }, 5000); // Delay of 1 second
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
        try {
            return await this.axiosInstance.post('/api/account/register', {
                username,
                email,
                password,
            });
        } catch (error) {
            console.error(error);
            // handle error accordingly
        }
    }
}

const authService = new AuthService();
export default authService;
