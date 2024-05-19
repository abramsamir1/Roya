import {Dimensions, Platform} from 'react-native';

export const OS = Platform.OS;
export const isAndroid = OS === 'android';

export const themeColors = {
  lightGray: '#FAFAFA', // background of screens
  whiteGray: '#F4F4F4', //background of view cards to make the contrast
  black: '#263238', // the main text colors of the app
  darkGray: '#455A64', //the secondary text colors
  white: '#fff',
};

export const dimensions = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

export const dimensionsCalculation = (IPhonePixel: any) => {
  return (dimensions.WIDTH * IPhonePixel) / 375;
};

export const fontSizes = {
  basic: dimensionsCalculation(15),
  smallBasic: dimensionsCalculation(isAndroid ? 11.65 : 12.2),
};

export default {
  OS,
  dimensions,
  fontSizes,
};
