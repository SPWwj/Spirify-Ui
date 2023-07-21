import { LoginForm } from "components/LoginForm";
import React from "react";
import { useSearchParams } from "react-router-dom";
import authService from "services/AuthService";

const OAuthLoginPage: React.FC = () => {
	const [searchParams] = useSearchParams();

	const handleSubmit = async (values: {
		username: string;
		password: string;
	}) => {
		const OAuthModel = {
			username: values.username,
			password: values.password,
			responseType: searchParams.get("response_type") || "",
			clientId: searchParams.get("client_id") || "",
			redirectUri: searchParams.get("redirect_uri") || "",
			scope: searchParams.get("scope") || "",
			state: searchParams.get("state") || "",     
			pluginId: searchParams.get("plugin_id") || "", 
		};

		await authService.oauthLogin(OAuthModel);
	};

	return <LoginForm onSubmit={handleSubmit} />;
};

export default OAuthLoginPage;
