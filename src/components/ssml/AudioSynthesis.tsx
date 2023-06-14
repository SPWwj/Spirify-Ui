import React from "react";
import { Button } from "antd";

interface PreviewProps {
	ssml: string;
}

const AudioSynthesis: React.FC<PreviewProps> = ({ ssml }) => {
	const synthesizeSpeech = () => {
		var msg = new SpeechSynthesisUtterance();
		msg.text = ssml;
		window.speechSynthesis.speak(msg);
	};

	return <Button onClick={synthesizeSpeech}>Preview</Button>;
};

export default AudioSynthesis;
