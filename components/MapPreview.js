import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import ENV from "../env";

const MapPreview = (props) => {
  let imagePreviewUrl;

  if (props.location) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${
      props.location.lat
    },${props.location.lng}&zoom=14&size=400x200&maptype=roadmap
      &markers=color:red%7Clabel:C%7C${props.location.lat},${props.location.lng}
      &key=${ENV().googleApiKey}`;
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image
          style={styles.mapImage}
          source={{
            uri:
              "https://i1.wp.com/www.alphr.com/wp-content/uploads/2014/11/google-map.jpg?resize=462%2C300&ssl=1",
          }}
        />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});
