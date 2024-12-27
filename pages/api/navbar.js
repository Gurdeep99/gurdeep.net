import mongoose from "mongoose";

// MongoDB connection
const mongoURL = process.env.MONGO_URI;

async function connectToDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

// Navbar schema
const NavbarSchema = new mongoose.Schema({
  name: String,
  route: String,
});

const NavbarModel = mongoose.models.navbar || mongoose.model("navbar", NavbarSchema);

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Check for Authorization header
    const { authorization } = req.headers;
    if (!authorization || authorization !== process.env.AUTH) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      // Connect to MongoDB
      await connectToDB();

      // Fetch navbar data
      const navbarData = await NavbarModel.find();

      return res.status(200).json(navbarData);
    } catch (error) {
      console.error("Error fetching navbar data:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
