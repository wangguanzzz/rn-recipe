import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import {
  createTabsNavigator,
  createBottomTabNavigator
} from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import FavoriteScreen from "../screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
  // initialRouteName: "MealDetail",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: "white",
    headerTitle: "a screen"
  }
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories"
      }
    },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetail: MealDetailScreen
  },
  defaultStackNavOptions
);

const FavoriteNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
  },
  defaultStackNavOptions
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor
    }
  }
};
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: "white"
        }
      });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
});

const MainNavigator = createDrawerNavigator({
  MealFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator
});
export default createAppContainer(MainNavigator);
