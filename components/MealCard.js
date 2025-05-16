import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

export default function MealCard({ meal }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: meal.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
            {meal.title}
          </Text>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
            {meal.amount}
          </Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
