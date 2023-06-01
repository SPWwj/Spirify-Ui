// TextToSpeechPage.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Input, message, List, Collapse, Space } from "antd";
import styles from "./TextToSpeechPage.module.scss";
import TextToSpeechService from "services/TextToSpeechService";
import VoiceSelection from "components/VoiceSelection";
import { SendOutlined } from "@ant-design/icons";
import IndexedDBService from "data/IndexedDBService";
import { SpeechItem } from "models/SpeechItem";

const { TextArea } = Input;

const TextToSpeechPage: React.FC = () => {
	const [text, setText] = useState("");
	const [loading, setLoading] = useState(false);
	const [streamLoading] = useState(false);
	const [speechItems, setSpeechItems] = useState<SpeechItem[]>([]);
	const textToSpeechService = TextToSpeechService.getInstance();
	const { Panel } = Collapse;
	const [selectedVoiceDisplayName, setSelectedVoiceDisplayName] =
		useState("Xiaochen");
	const [selectedLocaleName, setSelectedLocaleName] = useState("zh-CN");

	const audioQueueRef = useRef<string[]>([]);
	const [isPlaying, setIsPlaying] = useState(false);

	// Function to play audio from queue
	const playAudioFromQueue = useCallback(() => {
		if (audioQueueRef.current.length > 0) {
			const audioUrl = audioQueueRef.current[0]; // get the first URL
			const audio = new Audio(audioUrl);

			setIsPlaying(true);

			audio.onended = () => {
				setIsPlaying(false);
				// Remove played audio from queue
				audioQueueRef.current = audioQueueRef.current.slice(1);
			};

			audio.play();
		}
	}, []);

	const handleAudioData = useCallback(
		(audioData: string, receivedText: string | undefined) => {
			const audioBlob = new Blob(
				[Uint8Array.from(atob(audioData), (c) => c.charCodeAt(0))],
				{ type: "audio/wav" }
			);
			const audioUrl = URL.createObjectURL(audioBlob);

			if (receivedText === undefined) {
				setSpeechItems((prev) => [...prev, { text: text, audioUrl }]);
			} else {
				setSpeechItems((prev) => [...prev, { text: receivedText, audioUrl }]);
			}

			setText("");
			message.success("Audio conversion successful!");
			setLoading(false);

			// Add the audio URL to the queue
			audioQueueRef.current = [...audioQueueRef.current, audioUrl];

			// If no audio is playing, start playing immediately
			if (!isPlaying) {
				playAudioFromQueue();
			}
		},
		[text, isPlaying, playAudioFromQueue]
	);

	// Effect to play next audio when isPlaying changes
	useEffect(() => {
		if (!isPlaying) {
			playAudioFromQueue();
		}
	}, [isPlaying, playAudioFromQueue]);

	const handleError = (errorMessage: string) => {
		console.error("Error converting text to speech:", errorMessage);
		message.error("Error converting text to speech. Please try again.");
		setLoading(false);
	};

	const handleConvertClick = () => {
		setLoading(true);
		textToSpeechService.convertToSpeech(text);
	};

	const handlePlayClick = (audioUrl: string) => {
		const audio = new Audio(audioUrl);
		audio.play();
	};

	useEffect(() => {
		const fetchSpeechItems = async () => {
			const savedSpeechItems =
				await IndexedDBService.getInstance().getAudioData();

			if (savedSpeechItems) {
				const speechItems = savedSpeechItems.map((item) => {
					const audioBlob = new Blob([item.audioData], { type: "audio/wav" });
					const audioUrl = URL.createObjectURL(audioBlob);
					return { text: item.text, audioUrl };
				});

				setSpeechItems(speechItems);
			}
		};

		fetchSpeechItems();

		textToSpeechService.onReceiveAudioData(handleAudioData);
		textToSpeechService.onReceiveError(handleError);

		return () => {
			textToSpeechService.offReceiveAudioData(handleAudioData);
			textToSpeechService.offReceiveError(handleError);
		};
	}, [handleAudioData, textToSpeechService]);

	return (
		<div className={styles.container}>
			<Space direction="vertical" size="large">
				<Collapse>
					<Panel
						header={`Voice Selection - ${selectedVoiceDisplayName}, ${selectedLocaleName}`}
						key="1"
					>
						<div className={styles.panelContent}>
							<VoiceSelection
								onSelectionChange={(displayName, locale) => {
									setSelectedVoiceDisplayName(displayName);
									setSelectedLocaleName(locale);
								}}
							/>
						</div>
					</Panel>
				</Collapse>
				<div className={styles.inputSection}>
					<TextArea
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter text here..."
						className={styles.textArea}
						autoSize={{ minRows: 2, maxRows: 15 }}
					/>
					<Button
						type="primary"
						onClick={handleConvertClick}
						className={styles.button}
						disabled={loading || streamLoading}
						loading={loading || streamLoading}
						icon={<SendOutlined />}
					>
						Send
					</Button>
				</div>
				<List
					className={styles.messageList}
					itemLayout="horizontal"
					dataSource={speechItems}
					renderItem={(item) => (
						<List.Item className={styles.messageItem}>
							<List.Item.Meta title={item.text} />
							<Space>
								<Button
									type="primary"
									onClick={() => handlePlayClick(item.audioUrl!)}
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
							</Space>
						</List.Item>
					)}
				/>
			</Space>
		</div>
	);
};

export default TextToSpeechPage;
