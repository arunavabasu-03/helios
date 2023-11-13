import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "HomePage", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="imageGeneration/index"
        options={{ headerTitle: "Image", headerTitleAlign: "center" }}
      />
    </Stack>
  );
};

export default _layout;
