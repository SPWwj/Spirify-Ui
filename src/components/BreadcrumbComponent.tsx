import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcrumb from "antd/lib/breadcrumb";
import styles from "./BreadcrumbComponent.module.scss"; // or .css if you're using CSS
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const BreadcrumbComponent: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const pathnames = location.pathname.split("/").filter((x) => x);

	const breadcrumbItems = pathnames.map((value, index) => {
		const to = `/${pathnames.slice(0, index + 1).join("/")}`;

		return {
			breadcrumbName: value,
			path: to,
		};
	});
	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className={styles["breadcrumb-container"]}>
			<Breadcrumb
				className={styles["breadcrumb"]}
				itemRender={(item, _, items) => {
					const isLastItem = items.indexOf(item) === items.length - 1;
					return isLastItem ? (
						<span className={styles["last"]}>{item.breadcrumbName}</span>
					) : item.path ? (
						<Link to={item.path}>{item.breadcrumbName}</Link>
					) : (
						<span>{item.breadcrumbName}</span>
					);
				}}
				items={breadcrumbItems}
			/>
			<Button
				type="primary"
				shape="circle"
				icon={<ArrowLeftOutlined />}
				onClick={goBack}
			/>
		</div>
	);
};

export default BreadcrumbComponent;
