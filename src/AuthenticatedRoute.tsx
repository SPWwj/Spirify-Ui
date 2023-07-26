import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "redux/reducers";

interface AuthenticatedRouteProps {
	children: React.ReactNode;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
	children,
}) => {
	const location = useLocation();
	const username = useSelector((state: RootState) => state.auth.username);
	if (!username) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return <>{children}</>;
};

export default AuthenticatedRoute;
