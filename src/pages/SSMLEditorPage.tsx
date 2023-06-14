import React, { useState } from "react";
import { Row, Col } from "antd";
import Editor from "components/ssml/Editor";
import Preview from "components/ssml/Preview";
function formatSSML(
	input: string,
	maxLength: number,
	indentSpaces: number = 2
): string {
	let formatted: string[] = [];
	let currentLine = "";
	let currentIndent = "";
	let tokens = input
		.split(/(<[^>]*>)/g)
		.filter((token) => token.trim().length > 0);

	tokens.forEach((token) => {
		if (token.startsWith("<")) {
			if (currentLine.trim().length > 0) {
				formatted.push(currentLine);
			}
			if (token.startsWith("</")) {
				// Dedent after closing tag
				currentIndent = currentIndent.slice(0, -indentSpaces);
			}
			// Prepare for new line
			currentLine = currentIndent + token;
			if (
				!token.startsWith("</") &&
				!token.endsWith("/>") &&
				!token.endsWith("?>")
			) {
				// Indent after opening tag
				currentIndent += " ".repeat(indentSpaces);
			}
		} else {
			// Handle content inside tags
			let words = token.trim().split(/\s+/);
			words.forEach((word) => {
				if ((currentLine + " " + word).length > maxLength) {
					// Start new line if adding the word would exceed maxLength
					formatted.push(currentLine);
					currentLine = currentIndent + word;
				} else {
					// Otherwise, add the word to the current line
					currentLine += " " + word;
				}
			});
		}
	});

	// Add the last line to output if it's non-empty
	if (currentLine.trim().length > 0) {
		formatted.push(currentLine);
	}

	return formatted.join("\n");
}

function SSMLEditorPage() {
	const ssmlExample = `
	<?xml version="1.0"?>
	<speak version="1.0" 
		xmlns="http://www.w3.org/2001/10/synthesis"
		xml:lang="en-US">
	<voice name="en-US-LisaNeural">
		<prosody rate="medium">
		<p>
			Hello there! I'm a virtual assistant. I can assist you with a wide variety of tasks, like setting reminders, answering questions, or controlling smart home devices.
		</p>
		<p>
			<emphasis level="strong">Can I help you with anything today?</emphasis>
		</p>
		</prosody>
	</voice>
	</speak>`;

	const [ssml, setSSML] = useState<string>(formatSSML(ssmlExample, 80));
	// const [ssml, setSSML] = useState<string>(ssmlExample);

	return (
		<div>
			<Row gutter={[16, 16]} style={{ marginTop: "10px" }}>
				<Col xs={24} md={12}>
					<Editor ssml={ssml} onSSMLChange={setSSML} formatSSML={formatSSML} />
				</Col>
				<Col xs={24} md={12} style={{ margin: "auto" }}>
					<Preview ssml={ssml} />
				</Col>
			</Row>
		</div>
	);
}

export default SSMLEditorPage;
