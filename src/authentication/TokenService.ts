import jwt_decode from "jwt-decode";

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
    }
    static getCurrentUser() {
        const token = TokenService.getAccessToken();
        if (token) {
            const decodedToken: any = jwt_decode(token);
            return decodedToken.sub;

        }
        return null;
    }
}

export default TokenService;

