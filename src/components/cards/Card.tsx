import React from "react";
import "./Card.scss";

type CardProps = {
	background?: string;
	textColor?: string;
	icons: string[];
	backgroundImage?: string;
	title?: string; // New prop for title
};

export const Card: React.FC<CardProps> = ({
	background,
	textColor,
	icons,
	backgroundImage,
	title,
}) => (
	<div
		className="card"
		style={
			{
				"--background": background,
				"--textColor": textColor,
			} as React.CSSProperties
		}
	>
		<div className="multi-button">
			{icons.map((icon, index) => (
				<button key={index} className={`fas ${icon}`} />
			))}
		</div>
		<div
			className="container"
			style={
				{
					backgroundImage: `url(${backgroundImage})`, // Use backgroundImage prop
				} as React.CSSProperties
			}
		>
			<div className="title" data-title={title} />
		</div>
	</div>
);
