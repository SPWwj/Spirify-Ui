import styles from "./DashboardPage.module.scss";
import CardView from "components/CardView";
import { useNavigate } from "react-router-dom";
import attractionImage from "assets/images/attraction.png";
import sharingImage from "assets/images/sharing.png";
import eventImage from "assets/images/event.png";

const DashboardPage: React.FC = () => {
	const navigate = useNavigate(); // Get the navigate function

	const data = [
		{
			image: sharingImage,
			title: "Local Item Sharing",
			url: "sharing",
			id: 1,
		},
		{
			image: attractionImage,
			title: "City Attractions",
			url: "attraction",
			id: 2,
		},
		{
			image: eventImage,
			title: "Upcoming Events",
			url: "event",
			id: 3,
		},
	];
	return (
		<div className={styles.dashboard}>
			{data.map((cardData, index) => (
				<div
					key={index}
					onClick={() => navigate(`/dashboard/${cardData.url}`)} // Navigate to the GalleryPage when the CardView is clicked
				>
					<CardView {...cardData} textAlign="center" />
				</div>
			))}
		</div>
	);
};

export default DashboardPage;
