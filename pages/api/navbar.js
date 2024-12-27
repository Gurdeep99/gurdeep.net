// pages/api/navbar.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  try {
    // Authentication: Verify API token
    const token = req.headers.authorization?.split(" ")[1]; // Assuming a Bearer token is sent in headers

    if (!token || token !== process.env.AUTH) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if the request method is GET
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // Connect to the database
    await client.connect();

    const db = client.db("portfolio");
    const collection = db.collection("navbar");

    // Fetch data from the collection
    const data = await collection.find({}).toArray();

    // Return the data as a JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
