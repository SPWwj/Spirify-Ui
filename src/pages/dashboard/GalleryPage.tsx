import React, { useEffect, useState } from "react";
import { Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CardView, { CardViewProps } from "components/CardView";
import styles from "./GalleryPage.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import GalleryService from "services/GalleryService";

const GalleryPage: React.FC = () => {
	const { category } = useParams(); // Access the type route parameter

	const [data, setData] = useState<CardViewProps[]>([]);
	const navigate = useNavigate(); // Get the navigate function

	// Inside your component
	useEffect(() => {
		if (category) {
			const fetchData = async () => {
				try {
					const data = await GalleryService.getGallery(category, 0);
					if (Array.isArray(data)) {
						const dataMapped = data.map((data) => ({
							image: data.image || "",
							title: data.name,
							overview: data.overview,
							id: data.id,
						}));
						setData(dataMapped);
					} else {
						// handle the case when data is null or undefined
						message.error("Failed to fetch data");
					}
				} catch (error) {
					message.error(
						"Fetch data failed! Please check your internet connection."
					);
				}
			};

			fetchData();
		}
	}, [category]);

	return (
		<div className={styles.gallery}>
			{data.map((cardData, index) => (
				<CardView
					key={index}
					{...cardData}
					onClick={() => navigate(`/dashboard/${category}/${cardData.id}`)}
				/>
			))}
			<Button
				type="primary"
				shape="circle"
				icon={<PlusOutlined />}
				size="large"
				className={styles.addButton}
				onClick={() => navigate(`/dashboard/${category}/add`)}
			/>
		</div>
	);
};

export default GalleryPage;
