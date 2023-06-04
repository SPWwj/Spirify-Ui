import React, { useEffect, useState } from "react";
import { Select, message } from "antd";
import styles from "./VoiceSelection.module.scss";
import voicesData from "../data/voices.json";
import { VoiceModel } from "models/VoiceModel";
import VoiceCard from "./VoiceCard";
import { Button } from "antd";
import UserSpeechConfigService from "../services/UserSpeechConfigService";
import { IUserSpeechConfig } from "models/UserSpeechConfig";

const { Option } = Select;

interface VoiceSelectionProps {
	onSelectionChange?: (displayName: string, locale: string) => void;
}

const VoiceSelection: React.FC<VoiceSelectionProps> = ({
	onSelectionChange,
}) => {
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

	const saveConfig = async () => {
		if (!selectedVoice || !selectedLocale) {
			message.error("Voice and locale must be selected.");
			return;
		}

		const userSpeechConfig: IUserSpeechConfig = {
			id: 1, // This should be set according to your application's logic
			userId: 1, // This should be set according to your application's logic
			characterLimit: 2000, // This should be set according to your application's logic
			voice: selectedVoice,
			locale: selectedLocale,
		};

		try {
			await UserSpeechConfigService.updateUserSpeechConfig(userSpeechConfig);
			message.success("User speech configuration updated successfully!");
		} catch (e) {
			message.error(
				"There was an error while updating the user speech configuration."
			);
		}
	};

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
		if (voice && onSelectionChange) {
			onSelectionChange(voice.DisplayName, voice.Locale);
		}
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

			<Button
				type="primary"
				onClick={saveConfig}
				disabled={!selectedVoice || !selectedLocale}
			>
				Save Configuration
			</Button>
		</div>
	);
};

export default VoiceSelection;
