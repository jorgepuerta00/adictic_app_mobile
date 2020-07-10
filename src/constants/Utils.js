import { Platform, StatusBar } from 'react-native';
import Theme from './Theme'

export const isIOS = Platform.OS === 'ios' ? true : false

export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = Theme.SIZES.BASE*2 + (StatusHeight || 0);

export function currencyFormat (num) {
    return '$' + parseInt(num).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export const thumbMeasure = 40;