import { openDB, IDBPDatabase } from 'idb';
import { SpeechItem } from 'models/SpeechItem';

class IndexedDBService {
    private static dbName = 'TextToSpeechDB';
    private static storeName = 'AudioDataStore';
    private static instance: IndexedDBService | null = null;
    private db: IDBPDatabase | null = null;
    private initPromise: Promise<void>;

    private constructor() {
        this.initPromise = this.init();
    }

    private async init() {
        this.db = await openDB(IndexedDBService.dbName, 2, {
            upgrade(db) {
                if (!db.objectStoreNames.contains(IndexedDBService.storeName)) {
                    db.createObjectStore(IndexedDBService.storeName, { autoIncrement: true });
                }
            },
        });

    }


    public static getInstance(): IndexedDBService {
        if (!IndexedDBService.instance) {
            IndexedDBService.instance = new IndexedDBService();
        }
        return IndexedDBService.instance;
    }

    public async saveAudioData(speechItem: SpeechItem) {
        await this.initPromise;

        if (!this.db) {
            console.error("DB is not initialized.");
            return;
        }

        const tx = this.db.transaction(IndexedDBService.storeName, 'readwrite');
        const store = tx.objectStore(IndexedDBService.storeName);

        if (!speechItem.id) {
            const key = await store.add(speechItem);
            speechItem.id = key as number;
        } else {
            await store.put(speechItem, speechItem.id);
        }
        await tx.done;

        return speechItem;
    }


    public async getAudioData() {
        await this.initPromise;

        if (!this.db) {
            console.error("DB is not initialized.");
            return;
        }

        return await this.db.getAll(IndexedDBService.storeName);
    }


    public async getAudioDataById(id: number) {
        await this.initPromise;

        if (!this.db) {
            console.error("DB is not initialized.");
            return;
        }

        return await this.db.get(IndexedDBService.storeName, id);
    }
}

export default IndexedDBService;
