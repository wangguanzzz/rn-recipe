import React from "react";

import { CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const availablemeals = useSelector(state => {
    return state.meals.filteredMeals;
  });

  const displayedMeals = availablemeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList navigation={props.navigation} listData={displayedMeals} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
