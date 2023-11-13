import { View, Text } from "react-native";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  createPrediction,
  getPredictionStatus,
  getOutput,
} from "../../backend/replicate";
import { Image } from "@rneui/base";

export default function index() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { input } = params;
  const [responseData, setResponseData] = useState<any | null>(null);
  const [firstImage, setFirstImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inputString = Array.isArray(input) ? input[0] : input || "";
        const pred = await createPrediction({ input: inputString });
        setResponseData(pred);
        pollStatus(pred.id);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const pollStatus = async (predictionId: string) => {
      try {
        const status = await getPredictionStatus({ id: predictionId });

        console.log("Current Status:", status);

        if (status !== "succeeded") {
          setTimeout(() => pollStatus(predictionId), 5000);
        } else {
          const firstOutput = await getOutput({ id: predictionId });
          console.log("First Output Element:", firstOutput);

          setFirstImage(firstOutput);
        }
      } catch (error) {
        console.error("Error fetching prediction status:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Prompt:{input}</Text>
      <Text>Response from API:</Text>
      {responseData && (
        <View>
          <Text>Output: {JSON.stringify(responseData)}</Text>
          {firstImage && (
            <Image
              source={{ uri: firstImage }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      )}
      <Text
        onPress={() => {
          router.push({ pathname: "/" });
        }}
      >
        Go Home
      </Text>
    </View>
  );
}
