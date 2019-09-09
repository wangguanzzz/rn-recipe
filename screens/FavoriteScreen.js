import React from "react";

import MealList from "../components/MealList";
import Meal from "../models/meal";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoriteScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealList navigation={props.navigation} listData={favMeals} />;
};

FavoriteScreen.navigationOptions = navData => {
  return {
    headerTitle: "You Favorite",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavoriteScreen;
