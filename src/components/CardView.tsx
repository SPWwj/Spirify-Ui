import styles from "./CardView.module.scss";
import { Card } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { useImageLoader } from "../utilities/Helper";

export interface CardViewProps {
	id?: number;
	image: string;
	title: string;
	overview?: string;
	status?: boolean;
	textAlign?: "center" | "left" | "right";
	onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const CardView: React.FC<CardViewProps> = ({
	image,
	title,
	overview,
	status,
	textAlign = "left",
	onClick = undefined,
}) => {
	const { src, style } = useImageLoader(image);

	return (
		<Card
			onClick={onClick}
			hoverable
			className={styles.cardContainer}
			cover={
				<img
					className={styles.cardImage} // apply CSS classes
					alt={title}
					src={src}
					style={style}
				/>
			}
		>
			<Card.Meta
				title={title}
				description={overview}
				style={{ textAlign: textAlign }}
			/>
			{status !== undefined && (
				<div className={styles.statusContainer}>
					{status ? (
						<CheckCircleTwoTone twoToneColor="#52c41a" />
					) : (
						<CloseCircleTwoTone twoToneColor="#eb2f96" />
					)}
				</div>
			)}
		</Card>
	);
};

export default CardView;
