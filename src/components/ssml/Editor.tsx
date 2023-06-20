import React from "react";
import AceEditor from "react-ace";
import { Button } from "antd";
import ace from "ace-builds";

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-chaos";

// This line is important to tell ace editor where to load worker scripts from
ace.config.set("basePath", "/static/js");

interface EditorProps {
	ssml: string;
	onSSMLChange: (value: string) => void;
	formatSSML: (ssml: string, maxLength: number) => string;
}

const Editor: React.FC<EditorProps> = ({ ssml, onSSMLChange, formatSSML }) => {
	const handleFormatClick = () => {
		onSSMLChange(formatSSML(ssml, 80));
	};

	return (
		<div
			style={{
				position: "relative",
				border: "1px solid #F8F8F2",
				borderRadius: "15px",
				overflow: "hidden",
			}}
		>
			<AceEditor
				width="100%"
				mode="xml"
				theme="chaos"
				onChange={onSSMLChange}
				value={ssml}
				name="ssml-editor"
				setOptions={{
					maxLines: 20,
				}}
				editorProps={{
					$blockScrolling: true,
				}}
			/>
			<Button
				style={{
					position: "absolute",
					bottom: "20px",
					right: "30px",
					backgroundColor: "#272822",
					borderColor: "#F8F8F2",
					color: "#F8F8F2",
					border: "1px solid #F8F8F2",
				}}
				onClick={handleFormatClick}
			>
				Format
			</Button>
		</div>
	);
};

export default Editor;
