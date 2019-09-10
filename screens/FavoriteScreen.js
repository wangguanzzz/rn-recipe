import React from "react";

import MealList from "../components/MealList";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

const FavoriteScreen = props => {
  const favMeals = useSelector(state => {
    return state.meals.favoriteMeals;
  });

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
