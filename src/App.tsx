import React, { Suspense, lazy, useState } from "react";
import styles from "./App.module.scss";
import { HashRouter, Link, Route, Routes } from "react-router-dom";

import {
	PieChartOutlined,
	ProfileOutlined,
	DashboardOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import AuthenticatedRoute from "./AuthenticatedRoute";
import BreadcrumbComponent from "./components/BreadcrumbComponent";
import HeaderComponent from "components/HeaderComponent";
import { AuthProvider } from "context/AuthContext";
import ConnectionAlert from "components/ConnectionAlert";
import { Provider } from "react-redux";
import { store } from "redux/store";
import AppInitialization from "AppInitialization";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label: <Link to={`/${key}`}>{label}</Link>,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Index", "", <PieChartOutlined />),
	// getItem("About", "about", <DesktopOutlined />),
	// getItem("Login", "login", <LoginOutlined />),
	// getItem("Register", "register", <UserAddOutlined />),
	getItem("Profile", "profile", <ProfileOutlined />),
	// getItem("Chat", "chat", <WechatOutlined />),
	// getItem("Dashboard", "dashboard", <DashboardOutlined />),
	getItem("Text To Speech", "texttospeech", <DashboardOutlined />),
	// getItem("Voices", "voices", <DashboardOutlined />),
];
export const routes = [
	// { path: "/", component: lazy(() => import("./pages/Index")) },
	{
		path: "/",
		component: lazy(() => import("./pages/TextToSpeechPage")),
	},
	{ path: "/about", component: lazy(() => import("./pages/About")) },
	{ path: "/login", component: lazy(() => import("./pages/LoginPage")) },
	{ path: "/register", component: lazy(() => import("./pages/RegisterPage")) },
	// {
	// 	path: "/dashboard",
	// 	component: lazy(() => import("./pages/dashboard/DashboardPage")),
	// },
	// {
	// 	path: "/dashboard/:category",
	// 	component: lazy(() => import("./pages/dashboard/GalleryPage")),
	// },
	// {
	// 	path: "/dashboard/sharing/add",
	// 	component: lazy(() => import("./pages/dashboard/SharingFormPage")),
	// },
	// {
	// 	path: "/dashboard/event/add",
	// 	component: lazy(() => import("./pages/dashboard/EventFormPage")),
	// },
	// {
	// 	path: "/dashboard/attraction/add",
	// 	component: lazy(() => import("./pages/dashboard/AttractionFormPage")),
	// },
	// {
	// 	path: "/dashboard/sharing/:id",
	// 	component: lazy(() => import("./pages/dashboard/SharingDetailPage")),
	// },
	// {
	// 	path: "/dashboard/event/:id",
	// 	component: lazy(() => import("./pages/dashboard/EventDetailPage")),
	// },
	// {
	// 	path: "/dashboard/attraction/:id",
	// 	component: lazy(() => import("./pages/dashboard/AttractionDetailPage")),
	// },
	{
		path: "/access-denied",
		component: lazy(() => import("./pages/AccessDeniedPage")),
	},
	{
		path: "/profile",
		component: lazy(() => import("./pages/ProfilePage")),
		isProtected: true,
	},
	// {
	// 	path: "/chat",
	// 	component: lazy(() => import("./pages/ChatComponent")),
	// },
	// {
	// 	path: "/oauth/Login",
	// 	component: lazy(() => import("./pages/OAuthLoginPage")),
	// },
	{
		path: "/texttospeech",
		component: lazy(() => import("./pages/TextToSpeechPage")),
		isProtected: true,
	},
	// {
	// 	path: "/voices",
	// 	component: lazy(() => import("./pages/Voices")),
	// },
	{
		path: "*",
		component: lazy(() => import("./pages/NotFoundPage")),
	},
];

const App: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Provider store={store}>
			<AppInitialization />
			<AuthProvider>
				<Layout className={styles["layout"]}>
					<Suspense fallback={<div>Loading...</div>}>
						<HashRouter>
							<Sider
								trigger={null}
								className={styles["sider"]}
								breakpoint="lg"
								collapsedWidth="0"
								collapsible
								collapsed={collapsed}
								onCollapse={(value) => setCollapsed(value)}
							>
								<div className={styles["logo-vertical"]}>Spirify</div>

								<Menu
									className={styles["menu"]}
									defaultSelectedKeys={["1"]}
									mode="inline"
									items={items}
								/>
							</Sider>
							<Layout>
								<HeaderComponent
									collapsed={collapsed}
									setCollapsed={setCollapsed}
								/>
								<ConnectionAlert></ConnectionAlert>
								<Content className={styles["content"]}>
									<BreadcrumbComponent />
									<Routes>
										{routes.map((route, i) => (
											<Route
												key={i}
												path={route.path}
												element={
													route.isProtected ? (
														<AuthenticatedRoute>
															<route.component />
														</AuthenticatedRoute>
													) : (
														<route.component />
													)
												}
											/>
										))}
									</Routes>
								</Content>
								<Footer className={styles["footer"]}>
									Spirify ©2023 Created by Whalejay
								</Footer>
							</Layout>
						</HashRouter>
					</Suspense>
				</Layout>
			</AuthProvider>
		</Provider>
	);
};

export default App;
