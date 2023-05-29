// Your component file
import React, { useEffect, useRef, useState } from "react";
import { SignalRService } from "services/SignalRService";
import { Input, Button, List } from "antd";
import styles from "./ChatComponent.module.scss";

const ChatComponent: React.FC<{}> = () => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState<string[]>([]);
	const signalR = useRef(SignalRService.getInstance());
	useEffect(() => {
		const currentSignalR = signalR.current;

		const onMessageReceived = (user: string, receivedMessage: string) => {
			setMessages((prevMessages) => [
				...prevMessages,
				`${user}: ${receivedMessage}`,
			]);
			console.log("Received message: ", receivedMessage);
		};

		currentSignalR.registerOnServerEvents(onMessageReceived);

		return () => {
			currentSignalR.removeOnServerEvents(onMessageReceived);
		};
	}, []);

	const sendMessage = () => {
		if (message.trim() !== "") {
			// To prevent empty message sending
			signalR.current.send("user1", message);
			setMessage("");
		}
	};
	return (
		<div className={styles.chatComponent}>
			<List
				className={styles.messageList}
				bordered
				dataSource={messages}
				renderItem={(message) => <List.Item>{message}</List.Item>}
			/>
			<Input
				className={styles.chatInput}
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") sendMessage();
				}} // Trigger send on Enter
			/>
			<Button
				className={styles.sendMessageButton}
				type="primary"
				onClick={sendMessage}
			>
				Send Message
			</Button>
		</div>
	);
};

export default ChatComponent;
