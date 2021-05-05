import AsyncStorage from '@react-native-async-storage/async-storage';

export const parseAsyncStorage = async <T = {}>(key: string): Promise<T[]> => {
    try {
        const localState = await AsyncStorage.getItem(key);
        if (localState !== null) return JSON.parse(localState);
        return [];
    } catch {
        return [];
    }
};