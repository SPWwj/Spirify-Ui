import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import TokenService from "../authentication/TokenService";
import { AuthContext } from "context/AuthContext";
import { Typography, Button } from 'antd';
import './ProfilePage.module.scss';

const { Title, Paragraph } = Typography;

const ProfilePage: React.FC = () => {
	const [email, setEmail] = useState("");
	const { username, setUsername, logout } = useContext(AuthContext)!;

	useEffect(() => {
		const token = TokenService.getAccessToken();
		if (token) {
			const decodedToken: any = jwt_decode(token);
			setEmail(decodedToken.email);
		}
	}, [setUsername]);

	return (
		<div className="profile-page">
			<Title>Profile</Title>
			<Paragraph>Username: {username}</Paragraph>
			<Paragraph>Email: {email}</Paragraph>
			<Button onClick={() => setUsername(username + 1)} type="primary">Increment</Button>
			<Button onClick={logout} danger >Logout</Button>
		</div>
	);
};

export default ProfilePage;
