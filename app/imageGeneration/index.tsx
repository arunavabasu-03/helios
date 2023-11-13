import { View, ActivityIndicator } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  createPrediction,
  getPredictionStatus,
  getOutput,
} from "../../backend/replicate";
import { Image, Text } from "@rneui/base";
import { Button } from "@rneui/themed";

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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 20,
        }}
      >
        <Text h4 style={{ fontSize: 12, margin: 10 }}>
          Prompt- <Text style={{ fontSize: 20, margin: 10 }}>{input}</Text>
        </Text>
        {responseData ? (
          <View>
            {firstImage ? (
              <Image
                source={{ uri: firstImage }}
                style={{ width: 200, height: 200 }}
              />
            ) : (
              <View
                style={{
                  height: 200,
                  width: 200,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator size="large" />
              </View>
            )}
          </View>
        ) : (
          <View
            style={{
              height: 200,
              width: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onPress={() => {
            router.push({ pathname: "/" });
          }}
          buttonStyle={{
            backgroundColor: "#26c9ff",
            borderRadius: 50,
            height: 80,
            width: 280,
            margin: 20,
          }}
        >
          Done
        </Button>
      </View>
    </View>
  );
}
