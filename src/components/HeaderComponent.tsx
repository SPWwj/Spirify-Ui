import React, { FC, Dispatch, SetStateAction, useContext } from "react";
import { Button, Avatar } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import styles from "./HeaderComponent.module.scss"; // or wherever your styles are
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";

interface HeaderComponentProps {
	collapsed: boolean;
	setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const HeaderComponent: FC<HeaderComponentProps> = ({
	collapsed,
	setCollapsed,
}) => {
	const username = useSelector((state: RootState) => state.auth.username);
	const navigate = useNavigate(); // Get the navigate function

	return (
		<div className={styles["header"]}>
			<div className={styles["header-content"]}>
				<Button
					type="text"
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => setCollapsed(!collapsed)}
				/>

				<div className={styles["spacer"]} />

				<div
					onClick={() => navigate("/profile")}
					className={styles["login-profile"]}
				>
					<span className={styles["username"]}>
						{username ? username : "Guest"}
					</span>
					<Avatar shape="square" icon={<UserOutlined />} />
				</div>
			</div>
		</div>
	);
};

export default HeaderComponent;
