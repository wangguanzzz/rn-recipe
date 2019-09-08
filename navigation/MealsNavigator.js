import { createStackNavigator } from "react-navigation-stack";
import { createTabsNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

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

  {
    // initialRouteName: "MealDetail",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor: "white"
    }
  }
);

export default createAppContainer(MealsNavigator);
