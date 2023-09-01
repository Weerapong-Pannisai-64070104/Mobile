import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";


const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={  itemData.item.complexity}
        affordability={ itemData.item.affordability}
        image={ itemData.item.imageUrl}
        onSelectMeal={() => {
        {console.log(itemData.item.title + "4545454545")}
          props.navigation.navigate("MealDetail", {title: itemData.item.title, mealStep: itemData.item.steps});
        }}
      />

      // ส่วนนี้ <View>...</View> ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <MealItem> ข้างบนแทน
      // <View style={{ height: 50, width: "40%" }}>
      //   <Text>{itemData.item.title}</Text>
      // </View>
    );
  };

//   const catId = route.params.categoryId

//   const displayedMeals = MEALS.filter(
//     (meal) => meal.categoryIds.indexOf(catId) >= 0
//   );


  return (
    <View style={styles.screen}>
        {console.log(props+"55555555555555555555555555")}
      <FlatList
        style={{ width: "100%" }}
        data={props.listdata}
        renderItem={renderMealItem}
      />
    </View>

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างบนแทน
    // <View>
    //   <Text>Category Meals Screen!!</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
