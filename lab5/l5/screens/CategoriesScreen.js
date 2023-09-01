import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = (itemData) => {
    return (
      // <CategoryGridTile
      //   title={..เขียนโค้ดเพิ่ม..}
      //   color={..เขียนโค้ดเพิ่ม..}
      //   onSelect={() => {
      //     // เขียนโค้ดเพิ่ม
      //   }}
      // />
      

      // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <CategoryGridTile> ข้างต้นแทน
      <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => {
        // navigate ไปหน้า CategoryMealsScreen พร้อมกับส่งค่า categoryId ไปด้วย
        navigation.navigate("CategoryMeals",{ categoryId: itemData.item.id });

      }}
    />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างต้นแทน
    // <View>
    //   <Text>Categories Screen</Text>
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

export default CategoriesScreen;
