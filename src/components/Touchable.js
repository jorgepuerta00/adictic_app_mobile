import {
    TouchableOpacity,
    TouchableWithoutFeedback,
  } from "react-native";
import { isIOS } from '../constants/Utils'

export default isIOS
    ? TouchableOpacity
    : TouchableWithoutFeedback;