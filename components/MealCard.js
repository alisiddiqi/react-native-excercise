import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import styles from './MealCardStyles';

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