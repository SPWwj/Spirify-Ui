import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Image, Descriptions, Tag, Button, message } from "antd";
import ReactMarkdown from "react-markdown";
import styles from "./AttractionDetailPage.module.scss";
import { Attraction } from "models/Attraction";
import { useImageLoader } from "utilities/Helper";
import attractionService from "services/AttractionService";
import { AuthContext } from "context/AuthContext";

const AttractionDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [attraction, setAttraction] = useState<Attraction | null>(null);
	const { src, style } = useImageLoader(attraction?.image || "");
	const navigate = useNavigate();
	const { username } = useContext(AuthContext)!;

	useEffect(() => {
		const fetchAttraction = async () => {
			try {
				const response = await attractionService.getAttraction(id!);
				setAttraction(response);
			} catch (error) {
				console.error(error);
			}
		};
		fetchAttraction();
	}, [id]);

	if (!attraction) {
		return <div>Loading...</div>;
	}
	const deleteAttraction = async () => {
		// perform the delete operation here
		try {
			await attractionService.deleteAttraction(id!);
			message.success("Attraction deleted successfully!");
			setTimeout(() => {
				navigate(`/dashboard/attraction`);
			}, 1000); // Delay of 1 second
		} catch (error) {
			message.error("Failed to delete attraction!");
			console.error(error);
		}
	};

	return (
		<div className={styles.attractionDetail}>
			<Typography.Title>{attraction.name}</Typography.Title>
			{attraction.image && (
				<div className={styles.imageContainer}>
					<Image
						className={styles.cardImage}
						alt={id}
						src={src}
						style={style}
					/>
				</div>
			)}{" "}
			<Typography.Paragraph>{attraction.overview}</Typography.Paragraph>
			<ReactMarkdown>{attraction.description || ""}</ReactMarkdown>
			<Descriptions>
				{attraction.address && (
					<Descriptions.Item label="Address">
						{attraction.address.street}, {attraction.address.city},{" "}
						{attraction.address.country}
					</Descriptions.Item>
				)}
				{attraction.price && (
					<Descriptions.Item label="Price">
						{attraction.price}
					</Descriptions.Item>
				)}
				{attraction.openingDate && (
					<Descriptions.Item label="Opening Date">
						{attraction.openingDate}
					</Descriptions.Item>
				)}
				{attraction.location && (
					<Descriptions.Item label="Location">
						{attraction.location}
					</Descriptions.Item>
				)}
				{attraction.category && (
					<Descriptions.Item label="Category">
						<div className={styles.tagContainer}>
							{attraction.category.split(",").map((cat, index) => (
								<Tag key={index} color="blue">
									{cat.trim()}
								</Tag>
							))}
						</div>
					</Descriptions.Item>
				)}
				{attraction.targetAudience && (
					<Descriptions.Item label="Audience">
						<div className={styles.tagContainer}>
							{attraction.targetAudience.split(",").map((cat, index) => (
								<Tag key={index} color="blue">
									{cat.trim()}
								</Tag>
							))}
						</div>
					</Descriptions.Item>
				)}
				{attraction.publisherName && (
					<Descriptions.Item label="Publisher">
						{attraction.publisherName}
					</Descriptions.Item>
				)}
				{attraction.publisherId && (
					<Descriptions.Item label="Publisher ID">
						{attraction.publisherId}
					</Descriptions.Item>
				)}
			</Descriptions>
			{username && username === attraction.publisherName && (
				<Button danger onClick={deleteAttraction}>
					Delete Attraction
				</Button>
			)}
		</div>
	);
};

export default AttractionDetailPage;
