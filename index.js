
import { NativeModules } from 'react-native';

const { RNPreventScreenshot } = NativeModules;

export const { enabled } = RNPreventScreenshot;
export default RNPreventScreenshot;
