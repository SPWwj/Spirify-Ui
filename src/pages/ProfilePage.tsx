import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Button } from 'antd';
import './ProfilePage.module.scss';
import { RootState } from 'redux/store'; // Adjust this import to your project structure
import jwt_decode from "jwt-decode";
import TokenService from "authentication/TokenService";
import { logout } from "redux/slices/authSlice";
import { AppDispatch } from 'redux/store';

const { Title, Paragraph } = Typography;

const ProfilePage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const username = useSelector((state: RootState) => state.auth.username);
    const [email, setEmail] = React.useState("");

    useEffect(() => {
        const token = TokenService.getAccessToken();
        if (token) {
            const decodedToken: any = jwt_decode(token);
            setEmail(decodedToken.email);
        }
    }, []);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="profile-page">
            <Title>Profile</Title>
            <Paragraph>Username: {username}</Paragraph>
            <Paragraph>Email: {email}</Paragraph>
            <Button onClick={handleLogout} danger >Logout</Button>
        </div>
    );
};

export default ProfilePage;
