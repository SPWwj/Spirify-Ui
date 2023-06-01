import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { SpeechItemContextProvider } from "context/SpeechItemContext";

interface AuthenticatedRouteProps {
	children: React.ReactNode;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
	children,
}) => {
	const location = useLocation();
	const { username } = useContext(AuthContext)!;
	if (!username) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return <SpeechItemContextProvider>{children}</SpeechItemContextProvider>;
};

export default AuthenticatedRoute;
