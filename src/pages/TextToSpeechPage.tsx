// TextToSpeechPage.tsx
import React, { useCallback, useState } from "react";
import { Button, Input, message, List } from "antd";
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
	const [streamLoading] = useState(false);
	const [speechItems, setSpeechItems] = useState<SpeechItem[]>([]);
	const textToSpeechService = TextToSpeechService.getInstance();
	// const handleConvertClick = async () => {
	// 	setLoading(true);

	// 	try {
	// 		const audioData = await textToSpeechService.convertToSpeech(text);
	// 		const audioBlob = new Blob([audioData], { type: "audio/wav" });
	// 		const audioUrl = URL.createObjectURL(audioBlob);

	// 		setSpeechItems([...speechItems, { text, audioUrl }]);
	// 		setText("");
	// 		message.success("Audio conversion successful!");
	// 	} catch (error) {
	// 		console.error("Error converting text to speech:", error);
	// 		message.error("Error converting text to speech. Please try again.");
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };
	const handleAudioData = useCallback(
		(audioData: string) => {
			const audioBlob = new Blob(
				[Uint8Array.from(atob(audioData), (c) => c.charCodeAt(0))],
				{ type: "audio/wav" }
			);
			const audioUrl = URL.createObjectURL(audioBlob);

			setSpeechItems((prev) => [...prev, { text, audioUrl }]);
			setText("");
			message.success("Audio conversion successful!");
			setLoading(false);
		},
		[text]
	);

	const handleError = (errorMessage: string) => {
		console.error("Error converting text to speech:", errorMessage);
		message.error("Error converting text to speech. Please try again.");
		setLoading(false);
	};

	const handleConvertClick = () => {
		setLoading(true);

		textToSpeechService.onReceiveAudioData(handleAudioData);

		textToSpeechService.onReceiveError(handleError);

		textToSpeechService.convertToSpeech(text);
	};
	const handlePlayClick = (audioUrl: string) => {
		const audio = new Audio(audioUrl);
		audio.play();
	};
	React.useEffect(() => {
		textToSpeechService.onReceiveAudioData(handleAudioData);
		textToSpeechService.onReceiveError(handleError);

		return () => {
			textToSpeechService.offReceiveAudioData(handleAudioData);
			textToSpeechService.offReceiveError(handleError);
		};
	}, [handleAudioData, textToSpeechService]);

	return (
		<div className={styles.container}>
			<div className={styles.inputSection}>
				<TextArea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="请用中文"
					className={styles.textArea}
				/>
				<Button
					type="primary"
					onClick={handleConvertClick}
					className={styles.button}
					disabled={loading || streamLoading}
					loading={loading || streamLoading}
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
