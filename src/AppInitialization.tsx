import { ThunkDispatch } from "@reduxjs/toolkit";
import TokenService from "authentication/TokenService";
import { AuthContext } from "context/AuthContext";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { fetchSpeechItems } from "redux/slices/speechItemsSlice";
import { RootState } from "redux/store";
import ApiManager from "services/ApiManager";
import { SignalRServiceManager } from "services/SignalRServiceManger";

const AppInitialization: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, {}, AnyAction>>();
  const { logout } = useContext(AuthContext)!;
  const serviceManager = SignalRServiceManager.getInstance();
  const apiManager = ApiManager.getInstance();

  useEffect(() => {
    dispatch(fetchSpeechItems());
    const token = TokenService.getAccessToken();

    if (!token) {
      logout();
      return;
    }

    // if (TokenService.isTokenExpiring()) {
    //   const refreshToken = TokenService.getRefreshToken();
      
    //   if (!refreshToken) {
    //     return;
    //   }

    //   apiManager
    //     .refreshToken(refreshToken)
    //     .then(serviceManager.startAllConnections)
    //     .catch((error) => {
    //       console.log("Failed to refresh token", error);
    //       logout();
    //     });

    // } else {
    //   serviceManager.startAllConnections();
    // }
  }, [dispatch, logout, apiManager, serviceManager]);

  return null;
};

export default AppInitialization;
