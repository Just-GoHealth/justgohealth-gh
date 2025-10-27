import { ITrial } from "@/types/trial.interface";

export const getSchools = async function () {
  const res = await fetch("https://justgo-api.up.railway.app/api/v1/schools");

  if (!res.ok) {
    throw new Error("Failed to fetch schools");
  }

  const response = await res.json();

  return response.data;
};

export const sendTrialRequest = async (data: ITrial) => {
  const res = await fetch("https://justgo-api.up.railway.app/api/v1/lockin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send lock in data");
  }

  const response = await res.json();
  console.log(response);

  return response.data;
};
