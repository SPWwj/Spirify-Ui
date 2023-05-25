import React from "react";
import styles from "./NotFoundPage.module.scss";
import FireworkCanvas from "components/FireworkCanvas";

const NotFoundPage: React.FC = () => {
	return (
		<div className={styles.canvasContainer}>
			<FireworkCanvas />
			<div className={styles.errorContainer}>
				<div className={styles.error}>404</div>
				<div className={styles.errorMessage}>Page Not Found</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
