import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

const ImageGenerationPage = () => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text h4 style={styles.promptText}>
            📖 Enter Prompt
          </Text>
          <Input
            placeholder="Enter anything"
            containerStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            autoCorrect={false}
          />
        </View>
      </View>
      <View style={styles.buttonCointainer}>
        <Button title={"Generate"} buttonStyle={styles.button} />
      </View>
    </SafeAreaView>
  );
};

export default ImageGenerationPage;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  inputContainer: {
    width: "100%",
    borderBottomWidth: 0,
  },
  promptText: {
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  buttonCointainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#26c9ff",
    borderRadius: 50,
    height: 80,
    width: 280,
    margin: 20,
  },
});
