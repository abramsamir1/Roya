import {StyleSheet} from 'react-native';
import {themeColors, fontSizes} from '../../config';
export const styles = StyleSheet.create({
  deleteBtn: {
    borderWidth: 1,
    backgroundColor: themeColors.whiteGray,
    padding: 14,
    margin: 14,
    borderRadius: 10,
    alignSelf: 'flex-end',
    fontSize: fontSizes.basic,
    color: themeColors.darkGray,
  },
  deleteLabel: {
    fontSize: fontSizes.smallBasic,
    color: themeColors.darkGray,
  },
});
