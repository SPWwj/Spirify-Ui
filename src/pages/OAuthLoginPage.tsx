import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import authService, { OAuthRequestModel } from "services/AuthService";

const OAuthLoginPage: React.FC = () => {
	const [searchParams] = useSearchParams();

	const [OAuthModel, setOAuthModel] = useState<OAuthRequestModel>({
		username: "",
		password: "",
		responseType: searchParams.get("response_type") || "",
		clientId: searchParams.get("client_id") || "",
		redirectUri: searchParams.get("redirect_uri") || "",
		scope: searchParams.get("scope") || "",
	});

	const handleSubmit = async (values: {
		username: string;
		password: string;
	}) => {
		try {
			setOAuthModel((prevState) => ({
				...prevState,
				username: values.username,
				password: values.password,
			}));

			await authService.oauthLogin(OAuthModel);
		} catch (error) {
			message.error("Login failed! Please check your username or password.");
		}
	};

	return (
		<Form onFinish={handleSubmit}>
			<Form.Item
				label="Username"
				name="username"
				rules={[{ required: true, message: "Please input your username!" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: "Please input your password!" }]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Log in
				</Button>
			</Form.Item>
		</Form>
	);
};

export default OAuthLoginPage;
