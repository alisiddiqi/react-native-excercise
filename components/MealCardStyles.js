import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const MealCardStyles = StyleSheet.create({
  card: {
    paddingVertical: verticalScale(12),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(8),
    marginRight: scale(12),
  },
  info: {
    flex: 1,
  },
  text: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#1A1A1A',
    marginBottom: verticalScale(2),
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  button: {
    backgroundColor: '#1B4332',
    paddingHorizontal: scale(28),
    paddingVertical: verticalScale(5),
    borderRadius: scale(6),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(13),
    fontWeight: '500',
  },
});

export default MealCardStyles;
