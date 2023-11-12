import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card, Image } from "@rneui/themed";

const Crad = () => {
  return (
    <View>
      <Card containerStyle={styles.container}>
        <View style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: "https://replicate.delivery/pbxt/bn7Q2gus0hI4DJgoh3L4LXrSTrhYDf6W7Yf5QEWPlQAfxOvjA/out-0.png",
            }}
          />
          <View style={styles.textGroup}>
            <Text style={styles.title}>Generate images</Text>
            <Text style={styles.subtitle}>Generate images</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  textGroup: {
    flexDirection: "column",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 5,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 5,
    color: "#A8A8A8",
  },
});

export default Crad;
