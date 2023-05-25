import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from "antd";
import { AuthContext } from "context/AuthContext";

const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const { login } = useContext(AuthContext)!;

	const handleSubmit = async (values: {
		username: string;
		password: string;
		remember: boolean;
	}) => {
		try {
			// Call AuthService login method
			await login(values.username, values.password, values.remember);
			navigate("/profile");
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
			<Form.Item name="remember" valuePropName="checked">
				<Checkbox>Remember me</Checkbox>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Log in
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginPage;
