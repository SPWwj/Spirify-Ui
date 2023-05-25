import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./AccessDeniedPage.module.scss";

const AccessDeniedPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<h1>Access Denied</h1>
			<p>You do not have permission to view this page.</p>
			<Button type="primary" onClick={() => navigate("/login")}>
				Go to Login
			</Button>
		</div>
	);
};

export default AccessDeniedPage;
