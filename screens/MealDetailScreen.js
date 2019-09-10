import React, { useEffect, useCallback } from "react";

import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image
} from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = props => {
  const allMeals = useSelector(state => state.meals.meals);

  const mealID = props.navigation.getParam("mealId");

  const selectedMeal = allMeals.find(meal => {
    return meal.id === mealID;
  });

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavorite(mealID));
  }, [dispatch, mealID]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavHandler });
  }, toggleFavHandler);

  return (
    <ScrollView>
      <Image />
      <View>
        <Text> {props.duration}m</Text>
        <Text> {props.complexity}</Text>
        <Text> {props.affordability}</Text>
      </View>
      <View style={styles.screen}>
        <Text>{selectedMeal.title}</Text>

        <Button
          title="Go back to category"
          onPress={() => {
            props.navigation.popToTop();
          }}
        />
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = naviagtionData => {
  const mealTitle = naviagtionData.navigation.getParam("mealTitle");
  const toggleFav = naviagtionData.navigation.getParam("toggleFav");
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={toggleFav} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;
