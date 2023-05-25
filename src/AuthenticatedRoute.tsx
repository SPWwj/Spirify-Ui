import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "context/AuthContext";

interface AuthenticatedRouteProps {
	children: React.ReactNode;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
	children,
}) => {
	const location = useLocation();
	const { username } = useContext(AuthContext)!;
	if (!username) {
		return <Navigate to="/access-denied" state={{ from: location }} />;
	}

	return <>{children}</>;
};

export default AuthenticatedRoute;
