import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { LoginForm } from "components/LoginForm";
import { message } from "antd";

const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation(); // get the current location object
	const { login } = useContext(AuthContext)!;

	const handleSubmit = async (values: {
		username: string;
		password: string;
		remember?: boolean;
	}) => {
		// Inside your login handler, after successful login...
		const result = await login(
			values.username,
			values.password,
			values.remember || false
		);
		if (result) {
			// If we have state in the location and it has a 'from' field, navigate there
			if (location.state && location.state.from) {
				navigate(location.state.from);
			} else {
				// Otherwise, navigate to the profile page
				navigate("/profile");
			}
		} else {
			message.error("Invalid username or password");
		}
	};

	return <LoginForm onSubmit={handleSubmit} enableRemember={true} />;
};

export default LoginPage;
