// pages/api/navbar.js
import { MongoClient } from "mongodb";
import NodeCache from "node-cache";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

// Initialize an in-memory cache with a time-to-live (TTL) of 60 seconds
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });

export default async function handler(req, res) {
  try {
    // Authentication: Verify API token
    const token = req.headers.authorization?.split(" ")[1]; // Assuming a Bearer token is sent in headers

    // if (!token || token !== process.env.AUTH) {
    //   return res.status(401).json({ error: "Unauthorized" });
    // }

    // Check if the request method is GET
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // Check if the data is already cached
    const cachedData = cache.get("socialData");

    if (cachedData) {
      // If data is in cache, return it
      return res.status(200).json(cachedData);
    }

    // If data is not cached, connect to the database and fetch it
    await client.connect();
    const db = client.db("portfolio");
    const collection = db.collection("social");

    const data = await collection.find({}).toArray();

    // Cache the fetched data
    cache.set("socialData", data);

    // Return the data as a JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
