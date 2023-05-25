import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import TokenService from "../authentication/TokenService";
import { AuthContext } from "context/AuthContext";

const ProfilePage: React.FC = () => {
	const [email, setEmail] = useState("");
	const [usernameCookie, setUsernameCookie] = useState("");
	const { username, setUsername, logout } = useContext(AuthContext)!;
	const storedUsername = TokenService.getCurrentUser();

	useEffect(() => {
		const token = TokenService.getAccessToken();
		if (token) {
			const decodedToken: any = jwt_decode(token);
			setUsernameCookie(decodedToken.sub);
			setEmail(decodedToken.email);
		}
	}, [setUsername]);

	return (
		<div>
			<h1>Profile</h1>
			<p>Username: {username}</p>
			<p>storedUsername: {storedUsername}</p>
			<p>usernameCookie: {usernameCookie}</p>
			<p>Email: {email}</p>
			<button onClick={() => setUsername(username + 1)}>Increment</button>
			<button onClick={logout}>Logout</button>
		</div>
	);
};

export default ProfilePage;
