import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const COLORS = {
    ADICTIC: '#FD9595',
    TEXT: '#8A97AD',
    MUTED: '#CDD4E0',
    PRIMARY: '#FEA0A8',
    SECONDARY: '#F86672',
    RED: '#FF7062',
    YELLOW: '#FFDF9B',
    BLUE: '#9FBCFF',
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    GREY: '#535E71',
    NEUTRAL: '#E2E9F5',
    EMPTY: '#F4F7FD',
    FULL: '#FAE6BA',
    BUTTON: '#FF7783',
    SHADOW: '#F0F6FF'
  };
  
  const SIZES = {
    BASE: 16,
    FONT: 16,
    OPACITY: 0.8,
    WIDTH: width,
    HEIGHT: height
  }
  
  export default {
    COLORS,
    SIZES
  };
  