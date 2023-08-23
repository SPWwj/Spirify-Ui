import { Card as CustomCard } from "components/cards/Card";
import { Card } from "antd";
import React from "react";
import Meta from "antd/es/card/Meta";

const About: React.FC = () => {
	return (
		<div className="page page--about">
			{" "}
			<i className="fa fa-heart" aria-hidden="true"></i> Click the heart!
			<i className="fa fa-heart" aria-hidden="true"></i> Click the heart!
			<h2>About Page</h2>
			<CustomCard
				textColor="black"
				icons={["fa fa-heart", "fa fa-clipboard"]}
			/>
			<Card
				hoverable
				style={{ width: 240 }}
				cover={
					<img
						alt="example"
						src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
					/>
				}
			>
				{/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
			</Card>
			<CustomCard
				background="#3C3B3D"
				textColor="white"
				title="Hello World!"
				icons={["fa fa-heart", "fa fa-comment", "fa fa-share-alt"]}
			/>
			<CustomCard
				background="#5D9CEC"
				title="Hello World!"
				textColor="white"
				icons={[
					"fa fa-heart",
					"fa fa-comment",
					"fa fa-share-alt",
					"fa fa-trash",
				]}
				backgroundImage="https://spirify.azurewebsites.net/icon-512.png"
			/>{" "}
		</div>
	);
};

export default About;
