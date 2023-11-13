const apiUrl = "https://api.replicate.com/v1/predictions";
const replicateApiToken = process.env.EXPO_PUBLIC_REPLICATE_API_TOKEN;
const replicateApiVersion = process.env.EXPO_PUBLIC_REPLICATE_API_VERSION;

type createPredictionProps = {
  input: string;
};


type getPredictionStatusProps = {
  id: string;
};
type getOutputProps = {
  id: string;
};


/**
 * Creates a prediction using the Replicate API.
 * @param {Object} input - The input data for the prediction.
 * @param {string} input.prompt - The prompt for the prediction.
 * @returns {Promise<any>} A Promise that resolves to the prediction result.
 * @throws Will throw an error if the prediction creation fails.
 */
export const createPrediction = ({ input }: createPredictionProps): Promise<any> => {
  
  
    const requestData = {
    version: replicateApiVersion,
    input: {
      prompt: input,
    },
  };

  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${replicateApiToken}`,
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};

export const getPredictionStatus = ({
  id,
}: {
  id: string;
}): Promise<string> => {
  const predUrl = `https://api.replicate.com/v1/predictions/${id}`;

  return fetch(predUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${replicateApiToken}`,
    },
  })
    .then((response) => response.json())
    .then((data: any) => data.status)
    .catch((error) => {
      console.error("Error fetching prediction status:", error);
      throw error;
    });
};

export const getOutput = ({ id }: getOutputProps): Promise<string | null> => {
  const predUrl = `https://api.replicate.com/v1/predictions/${id}`;

  return fetch(predUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${replicateApiToken}`,
    },
  })
    .then((response) => response.json())
    .then((data: any) => (data.output.length > 0 ? data.output[0] : null))
    .catch((error) => {
      console.error("Error fetching first output element:", error);
      throw error;
    });
};
