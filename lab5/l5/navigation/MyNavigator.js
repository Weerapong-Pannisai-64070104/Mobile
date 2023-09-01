import React from "react";
// import library ที่จำเป็น

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";





// สร้าง navigator ตามโจทย์กำหนด

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
// function MyXXNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

const Stack = createNativeStackNavigator();

function MealNavigator() {
  return (
      <Stack.Navigator initialRouteName="Category" screenOptions={{ headerStyle: { backgroundColor: "#4a148c", }, headerTintColor: "white", }}>
        <Stack.Screen name="Category" component={CategoriesScreen} />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
  );
}


function FavNavigator() {
  return (
      <Stack.Navigator initialRouteName="Favorites" screenOptions={{ headerStyle: { backgroundColor: "#4a148c", }, headerTintColor: "white", }}>
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
  );
}


function FiltersNavigator() {
  return (
      <Stack.Navigator initialRouteName="Category" screenOptions={{ headerStyle: { backgroundColor: "#4a148c", }, headerTintColor: "white", }}>
        <Stack.Screen name="Filters" component={FiltersScreen} />
      </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MealsFavTabNavigator() {
  return (
<Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "darkblue",
        tabBarStyle: { backgroundColor: "lightblue" },  
        tabBarLabelStyle: { fontSize: 15 }
      }} >
        <Tab.Screen name="Meals" component={MealNavigator}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <MaterialCommunityIcons name="food" size={24} color="black" />;
            }
          }} />
        <Tab.Screen name="Favortie" component={FavNavigator}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="star" size={24} color="black" />;
            }
          }}
        />
      </Tab.Navigator>
  );
}

// อาจกำหนด Navigator เพิ่มได้
// function MyYYNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// สร้าง Navigator หลัก


const Drawer = createDrawerNavigator();

export default function MyNavigator() {
  return (

       <Drawer.Navigator
    screenOptions={{ drawerActiveTintColor: "orange", drawerInactiveTintColor: "gray", }} >
    <Drawer.Screen name="MealsFav" component={MealsFavTabNavigator} />
    <Drawer.Screen name="Filters" component={FiltersNavigator} />
   </Drawer.Navigator>
  );
}
