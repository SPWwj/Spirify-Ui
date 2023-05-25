import React from "react";
import { useSearchParams } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import authService from "services/AuthService";

const OAuthLoginPage: React.FC = () => {
	const [searchParams] = useSearchParams();



	const handleSubmit = async (values: {
		username: string;
		password: string;
	}) => {
		try {
			const OAuthModel = {
				username: values.username,
				password: values.password,
				response_type: searchParams.get('response_type') || '',
				client_id: searchParams.get('client_id') || '',
				redirect_uri: searchParams.get('redirect_uri') || '',
				scope: searchParams.get('scope') || '',
			};
	
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
