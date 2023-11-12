import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Crad from "../components/Crad";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Crad />
    </View>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
