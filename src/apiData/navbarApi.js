import axios from "axios";

async function navbarApi() {
  try {
    const response = await axios.get(`/api/navbar`, {
      headers: {
        Authorization: `Bearer ${process.env.AUTH}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error calling Get Public User Data API:", error);
  }
}
export default navbarApi;
