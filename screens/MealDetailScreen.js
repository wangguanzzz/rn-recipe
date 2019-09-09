import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = props => {
  const mealID = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find(meal => meal.id === mealID);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>

      <Button
        title="Go back to category"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = naviagtionData => {
  const mealId = naviagtionData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
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
