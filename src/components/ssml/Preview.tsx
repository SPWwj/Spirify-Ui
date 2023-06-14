import React, { useEffect, useState } from "react";
import { Typography, Avatar, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import AudioSynthesis from "./AudioSynthesis";

interface PreviewProps {
	ssml: string;
}

const Preview: React.FC<PreviewProps> = ({ ssml }) => {
	const [imgError, setImgError] = useState(false);
	const [parsedText, setParsedText] = useState("");

	const avatarImg = (
		<img
			src="/path/to/avatar.png"
			alt="avatar"
			onError={() => setImgError(true)}
		/>
	);

	useEffect(() => {
		// parse the SSML
		let parser = new DOMParser();
		let xmlDoc = parser.parseFromString(ssml, "text/xml");
		// find all text nodes and join their text content
		let text = Array.from(xmlDoc.querySelectorAll("*"))
			.filter((el) => el.childElementCount === 0)
			.map((el) => el.textContent)
			.join(" ");
		setParsedText(text);
	}, [ssml]);

	return (
		<Card
			cover={
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "5px",
					}}
				>
					<Avatar size={64} icon={imgError ? <UserOutlined /> : avatarImg} />
				</div>
			}
			actions={[<AudioSynthesis ssml={ssml} />]}
		>
			<Typography.Paragraph style={{ padding: 12 }}>
				{parsedText}
			</Typography.Paragraph>
		</Card>
	);
};

export default Preview;
