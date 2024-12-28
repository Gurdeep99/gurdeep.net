import axios from "axios";

async function socialApi() {
  try {
    const response = await axios.get(`/api/social`, {
      headers: {
        Authorization: `Bearer ${process.env.AUTH}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error calling Get Public User Data API:", error);
  }
}
export default socialApi;
