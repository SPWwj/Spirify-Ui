import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { LoginForm } from "components/LoginForm";

const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const { login } = useContext(AuthContext)!;

	const handleSubmit = async (values: {
		username: string;
		password: string;
		remember?: boolean;
	}) => {
		await login(values.username, values.password, values.remember || false);
		navigate("/profile");
	};

	return <LoginForm onSubmit={handleSubmit} enableRemember={true} />;
};

export default LoginPage;
