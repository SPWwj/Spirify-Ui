import React, { useState } from "react";
import { Form, Input, Button, Spin } from "antd";
import styles from "./RegisterForm.module.scss";

interface RegisterFormProps {
	onSubmit: (values: {
		username: string;
		password: string;
		email: string;
	}) => Promise<boolean>;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
	const [form] = Form.useForm();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (values: {
		username: string;
		email: string;
		password: string;
	}) => {
		setIsLoading(true);
		try {
			await onSubmit(values);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={styles.formContainer}>
			<Form form={form} className={styles.registerForm} onFinish={handleSubmit}>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: "Please input your username!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Please input your email!",
							type: "email",
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}
					hasFeedback
				>
					<Input.Password />
				</Form.Item>
				<Form.Item
					label="Confirm Password"
					name="confirm"
					dependencies={["password"]}
					hasFeedback
					rules={[
						{
							required: true,
							message: "Please confirm your password!",
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve();
								}
								return Promise.reject(
									new Error("The two passwords that you entered do not match!")
								);
							},
						}),
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" disabled={isLoading}>
						{isLoading ? (
							<span>
								Loading...
								<Spin />
							</span>
						) : (
							<span>Register</span>
						)}
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
