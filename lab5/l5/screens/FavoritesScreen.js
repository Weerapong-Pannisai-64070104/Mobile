import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavoritesScreen = ({navigation}) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return (
    <View style={styles.screen}>
      <MealList listdata={favMeals} navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
