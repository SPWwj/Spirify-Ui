import TokenService from "authentication/TokenService";
import React, { useState } from "react";
import authService from "services/AuthService";

export interface AuthContextInterface {
	username: string;
	setUsername: React.Dispatch<React.SetStateAction<string>>;
	login: (
		username: string,
		password: string,
		rememberMe: boolean
	) => Promise<boolean>;
	logout: () => void;
	register: (
		username: string,
		email: string,
		password: string
	) => Promise<boolean>;
}

export const AuthContext = React.createContext<AuthContextInterface | null>(
	null
);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
	children,
}) => {
	const storedUsername = TokenService.getCurrentUser();
	const [username, setUsername] = useState<string>(storedUsername || "");
	const login = async (
		username: string,
		password: string,
		rememberMe: boolean
	) => {
		if (!(await authService.login(username, password, rememberMe))) {
			return false;
		}
		setUsername(username); // Updates the username state upon successful login
		// SignalRServiceManager.getInstance().startAllConnections(); // Start SignalR connection after login
		return true;
	};

	const logout = () => {
		authService.logout();
		setUsername(""); // Clear the username state upon logout
	};

	const register = async (
		username: string,
		email: string,
		password: string
	): Promise<boolean> => {
		try {
			await authService.register(username, email, password);
			return true;
		} catch (error) {
			console.error("Registration failed:", error);
			return false;
		}
	};

	// The value provided now includes the implemented methods
	const value = { username, setUsername, login, logout, register };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
