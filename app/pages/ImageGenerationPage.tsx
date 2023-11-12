import { View, Text, StyleSheet } from "react-native";
import { Image } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@rneui/themed";
const ImageGenerationPage = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Enter anything" containerStyle={styles.input} />
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
    borderRadius: 10,
    color: "#A8A8A8",
  },
  //   image: {
  //     marginTop: 100,
  //     height: 280,
  //     width: 280,
  //     borderRadius: 10,
  //   },
});
