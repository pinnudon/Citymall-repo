import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Spinner = ({title}) => (
  <View style={[styles.container, styles.horizontal]}>
    <Text>Please wait for {title} section....</Text>
    <ActivityIndicator size="large" color="#fa72fc" />
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Spinner;