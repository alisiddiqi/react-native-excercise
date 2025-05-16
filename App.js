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
import styles from './AppStyles';
import mealData from './data/mealData';


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


