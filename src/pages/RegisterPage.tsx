import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { RegisterForm } from "components/RegisterForm";
import { message } from "antd";
const RegisterPage: React.FC = () => {
	const navigate = useNavigate();
	const { register, login } = useContext(AuthContext)!;

	const handleSubmit = async (values: {
		username: string;
		email: string;
		password: string;
	}) => {
		const registerSuccess = await register(
			values.username,
			values.email,
			values.password
		);
		if (registerSuccess) {
			const loginSuccess = await login(values.username, values.password, false);
			if (loginSuccess) {
				message.success("Registration successful! You are now logged in.");
				navigate("/profile"); // or wherever you want to redirect users after login
				return true;
			} else {
				message.error("Registration successful, but login failed.");
				return false;
			}
		} else {
			message.error("Registration failed!");
			return false;
		}
	};

	return <RegisterForm onSubmit={handleSubmit} />;
};

export default RegisterPage;
