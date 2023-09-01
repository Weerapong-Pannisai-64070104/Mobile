import React from "react";

import { MEALS } from "../data/dummy-data";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";

const MealDetailScreen = ({route, navigate}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้

  return (
    <View style={styles.screen}>
      
    <Text>{route.params.title}</Text>

    <FlatList
      data={route.params.mealStep}
      renderItem={({item, index}) => <Text>{index+1} {item}</Text>}

    />
    <Button
      title="Go Back to Categories"
      onPress={() => {
        navigation.navigate("Category")
      }}
    />
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

export default MealDetailScreen;
