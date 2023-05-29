// TextToSpeechPage.tsx
import React, { useState } from "react";
import { Button, Input, message, Spin, List } from "antd";
import styles from "./TextToSpeechPage.module.scss";
import TextToSpeechService from "services/TextToSpeechService";

const { TextArea } = Input;

interface SpeechItem {
	text: string;
	audioUrl: string;
}

const TextToSpeechPage: React.FC = () => {
	const [text, setText] = useState("");
	const [loading, setLoading] = useState(false);
	const [audioStream, setAudioStream] = useState<number[]>([]);
	const [streamLoading, setStreamLoading] = useState(false);
	const [speechItems, setSpeechItems] = useState<SpeechItem[]>([]);
	const textToSpeechService = TextToSpeechService.getInstance();
	const handleConvertClick = async () => {
		setLoading(true);

		try {
			const audioData = await textToSpeechService.convertToSpeech(text);
			const audioBlob = new Blob([audioData], { type: "audio/wav" });
			const audioUrl = URL.createObjectURL(audioBlob);

			setSpeechItems([...speechItems, { text, audioUrl }]);
			setText("");
			message.success("Audio conversion successful!");
		} catch (error) {
			console.error("Error converting text to speech:", error);
			message.error("Error converting text to speech. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	const handlePlayClick = (audioUrl: string) => {
		const audio = new Audio(audioUrl);
		audio.play();
	};

	return (
		<div className={styles.container}>
			{(loading || streamLoading) && <Spin size="large" />}
			<div className={styles.inputSection}>
				<TextArea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Type text here to convert to speech"
					className={styles.textArea}
				/>
				<Button
					type="primary"
					onClick={handleConvertClick}
					className={styles.button}
					disabled={loading || streamLoading}
				>
					Stream Convert to Speech
				</Button>
			</div>
			<List
				className={styles.messageList}
				itemLayout="horizontal"
				dataSource={speechItems}
				renderItem={(item) => (
					<List.Item className={styles.messageItem}>
						<List.Item.Meta title={item.text} />
						<Button
							type="primary"
							onClick={() => handlePlayClick(item.audioUrl)}
						>
							Play
						</Button>
						<a
							href={item.audioUrl}
							download={`${item.text}.wav`}
							className={styles.downloadButton}
						>
							<Button type="primary">Download</Button>
						</a>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default TextToSpeechPage;
