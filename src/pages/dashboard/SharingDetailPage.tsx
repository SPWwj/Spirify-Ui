import React, { useCallback, useContext, useEffect, useState } from "react";
import { Typography, Image, Descriptions, Tag, Button, message } from "antd";
import styles from "./SharingDetailPage.module.scss";
import { useImageLoader } from "utilities/Helper";
import { useNavigate, useParams } from "react-router-dom";
import sharingService from "services/SharingService";
import { AuthContext } from "context/AuthContext";

export interface SharingItem {
	name: string;
	image?: string;
	address: string;
	description?: string;
	overview: string;
	type: string;
	isAvailable?: boolean;
	ownerName: string;
	ownerId: string;
	borrowerId?: string;
	borrowerName?: string;
	fee?: number;
}

const SharingDetailPage: React.FC = () => {
	const [sharingItem, setSharingItem] = useState<SharingItem | null>(null);
	const { id } = useParams<{ id: string }>();
	const { username } = useContext(AuthContext)!;
	const navigate = useNavigate();
	const fetchSharingItem = useCallback(async () => {
		try {
			const response = await sharingService.getSharingItem(id!);
			setSharingItem(response);
		} catch (error) {
			message.error("error");
		}
	}, [id]);

	useEffect(() => {
		fetchSharingItem();
	}, [fetchSharingItem]);

	const { src, style } = useImageLoader(sharingItem?.image || "");
	const deleteSharing = async () => {
		try {
			await sharingService.deleteSharingItem(id!);
			message.success("Sharing item deleted successfully!");
			setTimeout(() => {
				navigate("/dashboard");
			}, 1000); // Delay of 1 second
		} catch (error) {
			message.error("Failed to delete sharing item!");
			console.error(error);
		}
	};
	const borrowSharing = async () => {
		try {
			await sharingService.borrowItem(id!);
			message.success("Borrowed successfully!");
			fetchSharingItem();
		} catch (error) {
			message.error("Failed to borrow the sharing item!");
			console.error(error);
		}
	};

	const returnedSharing = async () => {
		try {
			await sharingService.returnItem(id!);
			message.success("Returned successfully!");
			fetchSharingItem();
		} catch (error) {
			message.error("Failed to return the sharing item!");
			console.error(error);
		}
	};

	if (!sharingItem) {
		return <div>Loading...</div>;
	}
	return (
		<div className={styles.sharingDetail}>
			<Typography.Title>{sharingItem.name}</Typography.Title>
			{sharingItem.image && (
				<div className={styles.imageContainer}>
					<Image
						className={styles.cardImage} // apply CSS classes
						alt={sharingItem.name}
						src={src}
						style={style}
					/>
				</div>
			)}
			<Typography.Paragraph>{sharingItem.overview}</Typography.Paragraph>
			{sharingItem.description && (
				<Typography.Paragraph>{sharingItem.description}</Typography.Paragraph>
			)}
			<Descriptions>
				<Descriptions.Item label="Address">
					{sharingItem.address}
				</Descriptions.Item>
				<Descriptions.Item label="Availability">
					{sharingItem.isAvailable ? (
						<Tag color="green">Available</Tag>
					) : (
						<Tag color="red">Not Available</Tag>
					)}
				</Descriptions.Item>
				{sharingItem.type && (
					<Descriptions.Item label="Type">{sharingItem.type}</Descriptions.Item>
				)}
				{sharingItem.fee && (
					<Descriptions.Item label="Fee">
						<Tag>
							{new Intl.NumberFormat("en-sg", {
								style: "currency",
								currency: "SGD",
							}).format(sharingItem.fee)}
						</Tag>
					</Descriptions.Item>
				)}
				<Descriptions.Item label="Owner Name">
					{sharingItem.ownerName}
				</Descriptions.Item>
				<Descriptions.Item label="Owner ID">
					{sharingItem.ownerId}
				</Descriptions.Item>
				{sharingItem.borrowerId && (
					<Descriptions.Item label="Borrower ID">
						{sharingItem.borrowerId}
					</Descriptions.Item>
				)}
				{sharingItem.borrowerName && (
					<Descriptions.Item label="Borrower Name">
						{sharingItem.borrowerName}
					</Descriptions.Item>
				)}
			</Descriptions>
			{sharingItem.isAvailable
				? username &&
				  (username === sharingItem.ownerName ? (
						<Button danger className={styles.button} onClick={deleteSharing}>
							Remove Sharing
						</Button>
				  ) : (
						<Button className={styles.button} onClick={borrowSharing}>
							Borrow
						</Button>
				  ))
				: username &&
				  username === sharingItem.ownerName && (
						<Button className={styles.button} onClick={returnedSharing}>
							Returned
						</Button>
				  )}
		</div>
	);
};

export default SharingDetailPage;
