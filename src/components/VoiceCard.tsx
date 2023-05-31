import { Avatar, List, Typography, Divider } from "antd";
import styles from "./VoiceCard.module.scss"; // import the CSS module
import { VoiceModel } from "models/VoiceModel";

const { Title } = Typography;

interface VoiceCardProps {
	voiceDetails: VoiceModel;
}

const VoiceCard: React.FC<VoiceCardProps> = ({ voiceDetails }) => {
	const voiceDetailsList = [
		{ title: "ShortName", value: voiceDetails.ShortName },
		{ title: "Locale", value: voiceDetails.Locale },
		{ title: "LocaleName", value: voiceDetails.LocaleName },
		{ title: "Gender", value: voiceDetails.Gender },
		{ title: "VoiceType", value: voiceDetails.VoiceType },
		{ title: "Status", value: voiceDetails.Status },
		{ title: "SampleRateHertz", value: voiceDetails.SampleRateHertz },
		{ title: "WordsPerMinute", value: voiceDetails.WordsPerMinute },
		{ title: "StyleList", value: voiceDetails.StyleList?.join(", ") },
	].filter((item) => item.value && item.value !== "");

	return (
		<>
			<div className={styles.avatarWrapper}>
				<Avatar className={styles.avatar} src={voiceDetails.avatarUri} />
			</div>
			<Title level={2}>{voiceDetails.DisplayName}</Title>
			<List
				itemLayout="horizontal"
				dataSource={voiceDetailsList}
				renderItem={(item) => (
					<List.Item className={styles.listItem}>
						<List.Item.Meta title={item.title} description={item.value} />
					</List.Item>
				)}
			/>

			<Divider />
			<div className={styles.audioWrapper}>
				<audio className={styles.audio} src={voiceDetails.audioUri} controls>
					Your browser does not support the audio element.
				</audio>
			</div>
		</>
	);
};

export default VoiceCard;
