import { Card as CustomCard } from "components/cards/Card"; // Your custom Card import
import { Row, Col } from "antd"; // Import Row and Col from antd

const About: React.FC = () => {
	// Generate an array of 20 CustomCard components
	const customCardSamples = Array.from({ length: 20 }, (_, index) => (
		<Col key={index} xs={12} sm={12} md={8} lg={8} xl={6}>
			<CustomCard
				background="black"
				title="Hello World!"
				textColor="white"
				icons={["fa fa-heart", "fa fa-comment", "fa fa-share-alt", "fa fa-trash"]}
				backgroundImage="https://spirify.azurewebsites.net/icon-512.png"
			/>
		</Col>
	));

	return (
		<div className="page page--about">
			{/* existing code */}
			<Row gutter={[16, 16]} justify="center">
				{customCardSamples}
			</Row>
		</div>
	);
};

export default About;
