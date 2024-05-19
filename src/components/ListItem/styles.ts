import {StyleSheet} from 'react-native';
import {themeColors, fontSizes} from '../../config';

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: themeColors.whiteGray,
    borderRadius: 10,
    fontSize: fontSizes.basic,
    color: themeColors.darkGray,
    padding: 14,
    margin: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  checkBoxStyle: {
    marginBottom: 14,
  },
  infoView: {
    paddingVertical: 14,
  },
  infoStyle: {
    fontSize: fontSizes.smallBasic,
    color: themeColors.darkGray,
  },
  imgStyle: {
    width: null,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
