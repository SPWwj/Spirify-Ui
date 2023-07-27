import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { LoginForm } from "components/LoginForm";
import { message } from "antd";
import { login } from "redux/slices/authSlice";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch: AppDispatch = useDispatch();

const handleSubmit = async (values: {
    username: string;
    password: string;
    remember?: boolean;
}) => {
    const result = await dispatch(login(values.username, values.password, values.remember || false));
    if (result) {
        // If we have state in the location and it has a 'from' field, navigate there
        if (location.state && location.state.from) {
            navigate(location.state.from);
        } else {
            // Otherwise, navigate to the profile page
            navigate("/profile");
        }
    } else {
        message.error("Invalid username or password");
    }
};

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} enableRemember={true} />
        </div>
    );
};

export default LoginPage;
