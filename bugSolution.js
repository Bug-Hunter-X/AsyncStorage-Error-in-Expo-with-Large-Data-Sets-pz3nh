// bugSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();

const storeLargeData = async (data) => {
  try {
    await MMKV.setStringAsync('myLargeData', JSON.stringify(data));
    console.log('Data stored successfully using MMKV');
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

const retrieveLargeData = async () => {
  try {
    const data = await MMKV.getStringAsync('myLargeData');
    console.log('Data retrieved successfully using MMKV:', JSON.parse(data));
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
};

// Example usage:
const largeDataset = Array.from({length: 10000}, (_, i) => `Item ${i}`);

storeLargeData(largeDataset);
retrieveLargeData();
