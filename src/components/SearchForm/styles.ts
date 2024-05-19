import {StyleSheet} from 'react-native';
import {themeColors, fontSizes} from '../../config';

export const styles = StyleSheet.create({
  containerView: {
    padding: 14,
    flexDirection: 'row',
    backgroundColor: themeColors.whiteGray,
  },
  searchView: {
    flex: 4,
    padding: 7,
    backgroundColor: themeColors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themeColors.darkGray,
  },
  sortBtn: {
    flex: 1,
    padding: 7,
    backgroundColor: themeColors.darkGray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themeColors.darkGray,
    marginLeft: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortText: {
    fontSize: fontSizes.smallBasic,
    color: themeColors.white,
  },
});
