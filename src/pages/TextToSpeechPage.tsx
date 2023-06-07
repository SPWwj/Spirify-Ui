// TextToSpeechPage.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Input, message, List, Collapse, Space } from "antd";
import styles from "./TextToSpeechPage.module.scss";
import TextToSpeechService from "services/TextToSpeechService";
import VoiceSelection from "components/VoiceSelection";
import { SendOutlined } from "@ant-design/icons";
import { MessageType, SpeechItem } from "models/SpeechItem";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "redux/slices/speechItemsSlice";
import { RootState } from "redux/store";

const { TextArea } = Input;

const TextToSpeechPage: React.FC = () => {
	// use the useSelector hook to access state from the Redux store
	const dispatch = useDispatch();
	const speechItems = useSelector(
		(state: RootState) => state.speechItems.speechItems
	);
	const isLoading = useSelector(
		(state: RootState) => state.speechItems.isLoading
	);

	const [text, setText] = useState("");
	const textToSpeechService = TextToSpeechService.getInstance();
	const { Panel } = Collapse;
	const [selectedVoiceDisplayName, setSelectedVoiceDisplayName] =
		useState("Xiaochen");
	const [selectedLocaleName, setSelectedLocaleName] = useState("zh-CN");

	const audioQueueRef = useRef<SpeechItem[]>([]);
	const [isPlaying, setIsPlaying] = useState(false);
	const listContainerRef = useRef<HTMLDivElement | null>(null);

	const playAudioItem = useCallback(
		(item: SpeechItem) => {
			setIsPlaying(true);

			const audio = new Audio(item.audioUrl);
			audio
				.play()
				.then(() => {
					textToSpeechService.updatePlayedSpeechItem(item);
					setTimeout(() => {
						setIsPlaying(false);
					}, 700); // 0.7 seconds delay
				})
				.catch((error) => {
					console.error("Audio playback failed:", error);
					setIsPlaying(false);
				});
		},
		[textToSpeechService]
	);
	const playAudioFromQueue = useCallback(() => {
		if (!isPlaying && audioQueueRef.current.length > 0) {
			const speechItem = audioQueueRef.current[0];
			audioQueueRef.current = audioQueueRef.current.slice(1);
			playAudioItem(speechItem);
		}
	}, [playAudioItem, isPlaying]);

	const handlePlayClick = (item: SpeechItem) => {
		playAudioItem(item);
	};
	const handleConvertClick = () => {
		dispatch(setIsLoading(true));

		textToSpeechService.convertToSpeech(text);
		setText("");
	};
	useEffect(() => {
		const handleError = (errorMessage: string) => {
			console.error("Error converting text to speech:", errorMessage);
			message.error("Error converting text to speech. Please try again.");
		};
		textToSpeechService.onReceiveError(handleError);

		if (listContainerRef.current) {
			listContainerRef.current.scrollTop =
				listContainerRef.current.scrollHeight;
		}

		const newItems = speechItems.filter(
			(item) => !item.hasBeenPlayed && item.audioUrl
		);
		audioQueueRef.current = [...audioQueueRef.current, ...newItems];
		playAudioFromQueue();
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
							{/* <List.Item.Meta title={item.text} /> */}
							<Space>
								<div dangerouslySetInnerHTML={{ __html: item.text }} />
							</Space>
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
						disabled={true}
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Access from plugin only"
						className={styles.textArea}
						autoSize={{ minRows: 2, maxRows: 15 }}
					/>
					<Button
						type="primary"
						onClick={handleConvertClick}
						className={styles.button}
						disabled={isLoading || true}
						loading={isLoading}
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
