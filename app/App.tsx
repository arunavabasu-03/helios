import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from "@rneui/themed";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomePage from "./pages/HomePage";
import ImageGenerationPage from "./pages/ImageGenerationPage";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider>
          {/* <HomePage /> */}
          <ImageGenerationPage />
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
