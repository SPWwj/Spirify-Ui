// VoiceCard.tsx

import { Card, Avatar } from "antd";
import styles from "./VoiceCard.module.scss"; // import the CSS module
import { VoiceModel } from "model/VoiceModel";

interface VoiceCardProps {
	voiceDetails: VoiceModel;
}

const VoiceCard: React.FC<VoiceCardProps> = ({ voiceDetails }) => {
	return (
		<Card className={styles.voiceCard}>
			<div className={styles.avatarWrapper}>
				<Avatar className={styles.avatar} src={voiceDetails.avatarUri} />
			</div>
			<div className={styles.voiceDetails}>
				<h2 className={styles.displayName}>{voiceDetails.DisplayName}</h2>
				<p>ShortName: {voiceDetails.ShortName}</p>
				<p>Locale: {voiceDetails.Locale}</p>
				<p>LocaleName: {voiceDetails.LocaleName}</p>
				<p>Gender: {voiceDetails.Gender}</p>
				<p>VoiceType: {voiceDetails.VoiceType}</p>
				<p>Status: {voiceDetails.Status}</p>
				<p>SampleRateHertz: {voiceDetails.SampleRateHertz}</p>
				{voiceDetails.WordsPerMinute && (
					<p>WordsPerMinute: {voiceDetails.WordsPerMinute}</p>
				)}
				{voiceDetails.StyleList && voiceDetails.StyleList.length > 0 && (
					<p>StyleList: {voiceDetails.StyleList.join(", ")}</p>
				)}
			</div>
			<div className={styles.audioWrapper}>
				<audio className={styles.audio} src={voiceDetails.audioUri} controls>
					Your browser does not support the audio element.
				</audio>
			</div>
		</Card>
	);
};

export default VoiceCard;
