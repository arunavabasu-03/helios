import { View, StyleSheet } from "react-native";
import { Image, Text } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@rneui/themed";
const ImageGenerationPage = () => {
  return (
    <View style={styles.container}>
      <Text h4>Enter Prompt</Text>
      <Input
        placeholder="Enter anything"
        containerStyle={styles.input}
        inputContainerStyle={styles.inputContainer}
        autoCorrect={false}
      />
    </View>
  );
};

export default ImageGenerationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    marginTop: 100,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
});
