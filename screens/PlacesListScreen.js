import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Platform,
  TouchableNativeFeedback,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import PlaceItem from "../components/PlaceItem";
import * as placesActions from "../store/places-actions";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={() => {
            props.navigation.navigate("PlaceDetail", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <TouchableNativeFeedback
        onPress={() => {
          navData.navigation.navigate("NewPlace");
        }}
      >
        <View style={{ padding: 10 }}>
          <Ionicons
            name={Platform.OS === "android" ? "md-add" : "ios-add"}
            color={Platform.OS === "android" ? "white" : Colors.primary}
            size={30}
          />
        </View>
      </TouchableNativeFeedback>
    ),
  };
};

export default PlacesListScreen;

const styles = StyleSheet.create({});
