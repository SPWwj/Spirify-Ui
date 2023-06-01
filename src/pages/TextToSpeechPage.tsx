// TextToSpeechPage.tsx
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { Button, Input, message, List, Collapse, Space } from "antd";
import styles from "./TextToSpeechPage.module.scss";
import TextToSpeechService from "services/TextToSpeechService";
import VoiceSelection from "components/VoiceSelection";
import { SendOutlined } from "@ant-design/icons";
import { MessageType, SpeechItem } from "models/SpeechItem";
import { SpeechItemContext } from "context/SpeechItemContext";

const { TextArea } = Input;

const TextToSpeechPage: React.FC = () => {
	const [text, setText] = useState("");
	const [loading, setLoading] = useState(false);
	const [streamLoading] = useState(false);
	const textToSpeechService = TextToSpeechService.getInstance();
	const { Panel } = Collapse;
	const [selectedVoiceDisplayName, setSelectedVoiceDisplayName] =
		useState("Xiaochen");
	const [selectedLocaleName, setSelectedLocaleName] = useState("zh-CN");

	const audioQueueRef = useRef<SpeechItem[]>([]);
	const [isPlaying, setIsPlaying] = useState(false);
	const listContainerRef = useRef<HTMLDivElement | null>(null);
	const { speechItems, saveAudioData, updateSpeechItem } =
		useContext(SpeechItemContext);

	const playAudioFromQueue = useCallback(() => {
		console.log(audioQueueRef);
		if (audioQueueRef.current.length > 0) {
			const speechItem = audioQueueRef.current[0]; // get the first SpeechItem
			const audio = new Audio(speechItem.audioUrl);

			setIsPlaying(true);

			audio.onended = () => {
				setIsPlaying(false);
				// Mark the speech item as played
				speechItem.hasBeenPlayed = true;
				// Save the updated speech item
				saveAudioData(speechItem);
				// Update the speech item in the context
				updateSpeechItem(speechItem); // Remove played speech item from queue
				audioQueueRef.current = audioQueueRef.current.slice(1);
				// Play the next audio if there is any
				if (audioQueueRef.current.length > 0) {
					playAudioFromQueue();
				}
			};

			audio.play();
		}
	}, [saveAudioData, updateSpeechItem]);

	const handleConvertClick = () => {
		setLoading(true);
		textToSpeechService.convertToSpeech(text);
	};

	const handlePlayClick = (item: SpeechItem) => {
		// console.log(item, "item");
		const audio = new Audio(item.audioUrl);
		audio.play();
	};

	useEffect(() => {
		const handleError = (errorMessage: string) => {
			console.error("Error converting text to speech:", errorMessage);
			message.error("Error converting text to speech. Please try again.");
			setLoading(false);
		};
		textToSpeechService.onReceiveError(handleError);

		if (listContainerRef.current) {
			listContainerRef.current.scrollTop =
				listContainerRef.current.scrollHeight;
		}
		setLoading(false);
		const currentIds = new Set(audioQueueRef.current.map((item) => item.id));
		const newItems = speechItems.filter(
			(item) => !item.hasBeenPlayed && item.audioUrl && !currentIds.has(item.id)
		);
		audioQueueRef.current = [...audioQueueRef.current, ...newItems];
		// If no audio is playing, start playing immediately
		if (!isPlaying && audioQueueRef.current.length > 0) {
			playAudioFromQueue();
		}

		return () => {
			textToSpeechService.offReceiveError(handleError);
		};
	}, [textToSpeechService, speechItems, isPlaying, playAudioFromQueue]);

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
				<List
					itemLayout="horizontal"
					dataSource={speechItems}
					renderItem={(item) => (
						<List.Item className={styles.messageItem}>
							<List.Item.Meta title={item.text} />
							<Space>
								{item.messageType === MessageType.Audio && (
									<>
										<Button
											type="primary"
											onClick={() => handlePlayClick(item)}
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
									</>
								)}
							</Space>
						</List.Item>
					)}
				/>

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
			</Space>
		</div>
	);
};

export default TextToSpeechPage;
