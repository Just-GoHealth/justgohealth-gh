export const getSchools = async function () {
  const res = await fetch("https://justgo-api.up.railway.app/api/v1/schools");

  if (!res.ok) {
    throw new Error("Failed to fetch schools");
  }

  const response = await res.json();

  return response.data;
};


export const sendTrialRequest = () => {
    
}