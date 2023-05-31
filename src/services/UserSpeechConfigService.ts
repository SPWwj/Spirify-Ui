import { IUserSpeechConfig } from 'models/UserSpeechConfig';
import ApiManager from './ApiManager';

class UserSpeechConfigService {
    private apiManager = ApiManager.getInstance();

    public async updateUserSpeechConfig(userSpeechConfig: IUserSpeechConfig): Promise<void> {
        await this.apiManager.getAxiosInstance().put('/api/UserSpeechConfig', userSpeechConfig);
    }
}

const userSpeechConfigServiceInstance = new UserSpeechConfigService();
export default userSpeechConfigServiceInstance;