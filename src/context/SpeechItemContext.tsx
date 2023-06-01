import React, { useCallback, useEffect, useState } from "react";
import { SpeechItem } from "models/SpeechItem";
import TextToSpeechService from "services/TextToSpeechService";
import IndexedDBService from "data/IndexedDBService";

export interface SpeechItemContextProps {
	speechItems: SpeechItem[];
	addSpeechItem: (speechItem: SpeechItem) => void;
	saveAudioData: (speechItem: SpeechItem) => Promise<void>; // Add this line
	updateSpeechItem: (updatedItem: SpeechItem) => void; // And this line
}

export const SpeechItemContext = React.createContext<SpeechItemContextProps>({
	speechItems: [],
	addSpeechItem: () => {},
	saveAudioData: () => Promise.resolve(), // Mock function
	updateSpeechItem: () => {}, // Mock function
});

export const SpeechItemContextProvider: React.FC<
	React.PropsWithChildren<{}>
> = ({ children }) => {
	const [speechItems, setSpeechItems] = useState<SpeechItem[]>([]);
	const saveAudioData = useCallback(async (speechItem: SpeechItem) => {
		await IndexedDBService.getInstance().saveAudioData(speechItem);
	}, []);

	const updateSpeechItem = useCallback((updatedItem: SpeechItem) => {
		setSpeechItems((prevItems) => {
			// Replace the old item with the updated one
			return prevItems.map((item) =>
				item.audioUrl === updatedItem.audioUrl ? updatedItem : item
			);
		});
	}, []);

	const convertAudioDataToUrl = (speechItem: SpeechItem) => {
		if (!speechItem.audioData) {
			return speechItem; // or handle this case as per your requirement
		}

		const audioDataArray = Uint8Array.from(atob(speechItem.audioData), (c) =>
			c.charCodeAt(0)
		);
		const audioBlob = new Blob([audioDataArray.buffer], { type: "audio/wav" });
		const audioUrl = URL.createObjectURL(audioBlob);

		return {
			...speechItem,
			audioUrl,
		};
	};

	const loadInitialData = useCallback(async () => {
		const savedSpeechItems =
			await IndexedDBService.getInstance().getAudioData();
		if (savedSpeechItems) {
			const formattedSpeechItems = savedSpeechItems.map((item) =>
				convertAudioDataToUrl(item)
			);
			setSpeechItems(formattedSpeechItems);
		}
	}, []);

	const addSpeechItem = useCallback((speechItem: SpeechItem) => {
		const newItem = convertAudioDataToUrl(speechItem);
		setSpeechItems((prevItems) => [...prevItems, newItem]);
	}, []);

	useEffect(() => {
		TextToSpeechService.getInstance().setSaveAudioDataCallback(addSpeechItem);
		loadInitialData();
	}, [addSpeechItem, loadInitialData]);

	return (
		<SpeechItemContext.Provider
			value={{ speechItems, addSpeechItem, saveAudioData, updateSpeechItem }}
		>
			{children}
		</SpeechItemContext.Provider>
	);
};
