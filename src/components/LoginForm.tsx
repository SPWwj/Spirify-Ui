import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Spin } from "antd";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
	onSubmit: (values: {
		username: string;
		password: string;
		remember?: boolean;
	}) => Promise<void>;
	enableRemember?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
	onSubmit,
	enableRemember,
}) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (values: {
		username: string;
		password: string;
		remember?: boolean;
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
			<Form className={styles.loginForm} onFinish={handleSubmit}>
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
				{enableRemember && (
					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
				)}
				<Form.Item>
					<Button
						className={styles.loginButton}
						type="primary"
						htmlType="submit"
						disabled={isLoading}
					>
						{isLoading ? <Spin /> : "Log in"}
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
