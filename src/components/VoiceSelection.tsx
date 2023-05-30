import React, { useEffect, useState } from "react";
import { Select } from "antd";
import styles from "./VoiceSelection.module.scss";
import voicesData from "../data/voices.json";
import { VoiceModel } from "model/VoiceModel";
import VoiceCard from "./VoiceCard";

const { Option } = Select;

const VoiceSelection: React.FC = () => {
	const [voices, setVoices] = useState<VoiceModel[]>([]);
	const [selectedLocale, setSelectedLocale] = useState<string | undefined>();
	const [selectedGender, setSelectedGender] = useState<string | undefined>();
	const [selectedVoice, setSelectedVoice] = useState<string | undefined>();
	const [voiceDetails, setVoiceDetails] = useState<VoiceModel | undefined>(
		undefined
	);
	useEffect(() => {
		setVoices(voicesData as VoiceModel[]);
		const defaultVoice = voicesData.find(
			(voice) => voice.ShortName === "zh-CN-XiaochenNeural"
		);

		// When defaultVoice changes, update other state variables
		if (defaultVoice) {
			setSelectedLocale(defaultVoice.Locale);
			setSelectedGender(defaultVoice.Gender);
			setSelectedVoice(defaultVoice.Name);
			setVoiceDetails(defaultVoice);
		}
	}, []);

	const localeChangeHandler = (value: string) => {
		setSelectedLocale(value);
		setSelectedGender(undefined);
		setSelectedVoice(undefined);
		setVoiceDetails(undefined);
	};

	const genderChangeHandler = (value: string) => {
		setSelectedGender(value);
		setSelectedVoice(undefined);
		setVoiceDetails(undefined);
	};

	const voiceChangeHandler = (value: string) => {
		setSelectedVoice(value);
		const voice = voices.find((v) => v.Name === value);
		setVoiceDetails(voice);
	};

	const locales = Array.from(new Set(voices.map((voice) => voice.Locale)));
	const filteredGenders = Array.from(
		new Set(
			voices
				.filter((voice) => voice.Locale === selectedLocale)
				.map((voice) => voice.Gender)
		)
	);
	const filteredVoices = voices.filter(
		(voice) =>
			voice.Locale === selectedLocale && voice.Gender === selectedGender
	);

	return (
		<div className={styles.selection}>
			<Select
				placeholder="Select locale"
				onChange={localeChangeHandler}
				value={selectedLocale}
				showSearch
				optionFilterProp="children"
			>
				{locales.map((locale, index) => (
					<Option key={index} value={locale}>
						{voices.find((v) => v.Locale === locale)?.LocaleName}
					</Option>
				))}
			</Select>
			<Select
				placeholder="Select gender"
				onChange={genderChangeHandler}
				value={selectedGender}
				showSearch
				optionFilterProp="children"
				disabled={!selectedLocale}
			>
				{filteredGenders.map((gender, index) => (
					<Option key={index} value={gender}>
						{gender}
					</Option>
				))}
			</Select>
			<Select
				placeholder="Select voice"
				onChange={voiceChangeHandler}
				value={selectedVoice}
				showSearch
				optionFilterProp="children"
				disabled={!selectedGender}
			>
				{filteredVoices.map((voice, index) => (
					<Option key={index} value={voice.Name}>
						{voice.DisplayName}
					</Option>
				))}
			</Select>
			{voiceDetails && <VoiceCard voiceDetails={voiceDetails} />}
		</div>
	);
};

export default VoiceSelection;
