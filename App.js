import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MealCard from './components/MealCard';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const mealData = [
  {
    title: 'Breakfast: Oatmeal, Scrambled Eggs',
    image: 'https://feelgoodfoodie.net/wp-content/uploads/2023/03/Scrambled-Oats-01.jpg',
    amount: '1 Bowl',
  },
  {
    title: 'Snack: Mixed Nuts & Berries',
    image: 'https://m.media-amazon.com/images/I/61jwrDyqiDL.jpg',
    amount: '5 of each',
  },
  {
    title: 'Lunch: Grilled Chicken Salad, Quinoa',
    image: 'https://www.eatingbirdfood.com/wp-content/uploads/2023/06/grilled-chicken-salad-hero.jpg',
    amount: '1 Bowl',
  },
  {
    title: 'Snack: Hummus with Carrot Sticks',
    image: 'https://images.eatthismuch.com/img/34111_elm333_5ee7d84d-f2bc-4602-9ac6-7eb9d48d9f36.jpg',
    amount: '5 Carrots',
  },
  {
    title: 'Dinner: Baked Salmon, Vegetables',
    image: 'https://images.squarespace-cdn.com/content/v1/58bf61ea3a041163d873b4e8/1587422396891-RMWS0B51RBVJ53YO2HCM/combisteam-queen-bakedsalmonwithvegetables.jpeg',
    amount: '1 Bowl',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.side}>
          <Text style={styles.arrow}>‹</Text>
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={styles.headerTitle}>Meal Plans</Text>
        </View>
        <View style={styles.side} />
      </View>

      {/* Day Selector */}
      <View style={styles.daySelector}>
        <TouchableOpacity>
          <Text style={styles.arrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.dayText}>Day 1</Text>
        <TouchableOpacity>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Meal Cards */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.mealList}>
          {mealData.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    // paddingTop:20,
    marginTop:25,
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
    fontSize: scale(30),
    fontWeight: '300',
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
});
