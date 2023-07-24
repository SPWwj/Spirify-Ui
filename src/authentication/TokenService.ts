import jwt_decode from "jwt-decode";
import { SignalRServiceManager } from "services/SignalRServiceManger";

class TokenService {
    static setToken(accessToken: string, refreshToken: string, rememberMe: boolean = false) {
        localStorage.setItem("remember_me", JSON.stringify(rememberMe));
        if (rememberMe) {
            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("refresh_token", refreshToken);
        } else {
            sessionStorage.setItem("access_token", accessToken);
            sessionStorage.setItem("refresh_token", refreshToken);
        }
        // SignalRServiceManager.getInstance().startAllConnections(); // Start SignalR connection after login

    }

    static storeToken(accessToken: string, refreshToken: string) {
        const rememberMe = JSON.parse(localStorage.getItem("remember_me") as string);
        this.setToken(accessToken, refreshToken, rememberMe);
    }



    static getAccessToken() {
        return localStorage.getItem("access_token") || sessionStorage.getItem("access_token");
    }

    static getRefreshToken() {
        return localStorage.getItem("refresh_token") || sessionStorage.getItem("refresh_token");
    }

    static clearToken() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("refresh_token");
        // SignalRServiceManager.getInstance().stopAllConnections(); // Stop SignalR connection after registration

    }
    static getCurrentUser() {
        const token = TokenService.getAccessToken();
        if (token) {
            const decodedToken: any = jwt_decode(token);
            return decodedToken.sub;

        }
        return null;
    }
    static isTokenExpired() {
        const token = TokenService.getAccessToken();
        if (token) {
            const decodedToken: any = jwt_decode(token);
            const currentTime = Date.now().valueOf() / 1000;
            return decodedToken.exp < currentTime;
        }
        return true;
    }

    static isTokenExpiring() {
        const token = TokenService.getAccessToken();
        if (token) {
            const decodedToken: any = jwt_decode(token);
            const currentTime = Math.floor(new Date().getTime() / 1000); // Get the current time in seconds since epoch (Unix timestamp)
            const twoHoursInSeconds = 2 * 60 * 60;
            return decodedToken.exp < (currentTime + twoHoursInSeconds);
        }
        return true;
    }
}

export default TokenService;

