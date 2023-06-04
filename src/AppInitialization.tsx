import { ThunkDispatch } from "@reduxjs/toolkit";
import TokenService from "authentication/TokenService";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { fetchSpeechItems } from "redux/slices/speechItemsSlice";
import { RootState } from "redux/store";
import ApiManager from "services/ApiManager";
import AuthService from "services/AuthService";
import { SignalRServiceManager } from "services/SignalRServiceManger";

const AppInitialization: React.FC = () => {
	const dispatch: ThunkDispatch<RootState, {}, AnyAction> = useDispatch();

	useEffect(() => {
		const token = TokenService.getAccessToken();

		// If there's no token, redirect to login page.
		if (!token) {
			AuthService.logout();
			return;
		}

		// Check token validity.
		if (TokenService.isTokenExpiring()) {
			// If token is expired, try to refresh it.
			const refreshToken = TokenService.getRefreshToken();
			if (refreshToken === null) {
				return;
			}
			ApiManager.getInstance()
				.refreshToken(refreshToken)
				.then(() => {
					// Start SignalR connections after token is refreshed.
					SignalRServiceManager.getInstance().startAllConnections();
				})
				.catch((error) => {
					// Handle error - for instance, redirecting to login page.
					console.log("Failed to refresh token", error);
					AuthService.logout();
				});
		} else {
			// If token is still valid, start SignalR connections.
			SignalRServiceManager.getInstance().startAllConnections();
		}
		dispatch(fetchSpeechItems());
	}, [dispatch]);

	return null;
};

export default AppInitialization;
