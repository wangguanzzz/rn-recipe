import React, { useState, useEffect, useCallback } from "react";

import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = props => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree: isGlutenFree,
      isLactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restricitons</Text>
      <FilterSwitch
        label="Gluter-free"
        state={isGlutenFree}
        onChange={newvalue => {
          setIsGlutenFree(newvalue);
        }}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newvalue => {
          setIsLactoseFree(newvalue);
        }}
      />
      <FilterSwitch
        label="vegan"
        state={isVegan}
        onChange={newvalue => {
          setIsVegan(newvalue);
        }}
      />
      <FilterSwitch
        label="vegetarian"
        state={isVegetarian}
        onChange={newvalue => {
          setIsVegetarian(newvalue);
        }}
      />
    </View>
  );
};

FilterScreen.navigationOptions = navData => {
  return {
    headerTitle: "filters",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-star"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 20
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  }
});

export default FilterScreen;
