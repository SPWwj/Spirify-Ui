import React, { useEffect, useState } from "react";
import { Table } from "antd";

interface Voice {
	Name: string;
	DisplayName: string;
	LocalName: string;
	ShortName: string;
	Gender: string;
	Locale: string;
	LocaleName: string;
	SampleRateHertz: string;
	VoiceType: string;
	Status: string;
	WordsPerMinute: string;
	AvatarSrc: string;
	SampleAudioSrc: string;
}

const VoicesTable: React.FC = () => {
	const [voices, setVoices] = useState<Voice[]>([]);

	useEffect(() => {
		const fetchVoices = async () => {
			const response = await fetch("voices.json");
			const data = await response.json();
			setVoices(data);
		};

		fetchVoices();
	}, []);

	const columns = [
		{
			title: "Name",
			dataIndex: "Name",
			key: "Name",
		},
		{
			title: "Display Name",
			dataIndex: "DisplayName",
			key: "DisplayName",
		},
		{
			title: "Gender",
			dataIndex: "Gender",
			key: "Gender",
		},
		{
			title: "Locale",
			dataIndex: "LocaleName",
			key: "LocaleName",
		},
		{
			title: "Sample Rate (Hz)",
			dataIndex: "SampleRateHertz",
			key: "SampleRateHertz",
		},
		{
			title: "Voice Type",
			dataIndex: "VoiceType",
			key: "VoiceType",
		},
		{
			title: "Status",
			dataIndex: "Status",
			key: "Status",
		},
		{
			title: "Words Per Minute",
			dataIndex: "WordsPerMinute",
			key: "WordsPerMinute",
		},
	];

	return <Table dataSource={voices} columns={columns} />;
};

export default VoicesTable;
