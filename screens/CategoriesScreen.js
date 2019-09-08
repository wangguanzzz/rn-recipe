import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform
} from "react-native";

import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesScreen = props => {
  const rendGridItem = itemData => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={rendGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
