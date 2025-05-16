// AppStyles.js
import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(50),
    paddingHorizontal: scale(16),
  },
  headerTitle: {
    fontSize: moderateScale(18),
    fontWeight: '400',
  },
  side: {
    width: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: scale(22),
    fontWeight: '400',
    color: '#000',
  },
  daySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(4),
  },
  dayText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginHorizontal: scale(20),
  },
  mealList: {
    backgroundColor: '#EAF4EA',
    borderRadius: scale(20),
    marginHorizontal: scale(16),
    marginTop: verticalScale(4),
    padding: scale(16),
  },
  scrollContent: {
    paddingBottom: verticalScale(20),
  },
});

export default AppStyles;
