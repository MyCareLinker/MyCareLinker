import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS
app.use(
  cors({
    origin: [
      "https://mycarelinker.vercel.app",
      "https://www.mycarelinker.com",
    ],
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Share schema
const shareSchema = new mongoose.Schema({
  patientId: String,
  fromProvider: String,
  toProvider: String,
  timestamp: { type: Date, default: Date.now },
});

const Share = mongoose.model("Share", shareSchema);

// Test route
app.get("/", (req, res) => res.send("MyCareLinker backend is running!"));

// Return mock patients
app.get("/patients", (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "mockPatients.json"), "utf-8");
    const patients = JSON.parse(data);
    res.json({ entry: patients.map((p) => ({ resource: p })) });
  } catch (error) {
    console.error("Error reading mockPatients.json:", error);
    res.status(500).json({ error: "Failed to load patients" });
  }
});

// Save a shared record event
app.post("/share", async (req, res) => {
  try {
    const { patientId, fromProvider, toProvider, apiKey } = req.body;

    // Basic API key check
    if (apiKey !== process.env.API_KEY) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const share = new Share({ patientId, fromProvider, toProvider });
    await share.save();

    res.json({ success: true, message: "Record shared successfully!" });
  } catch (error) {
    console.error("Error sharing record:", error);
    res.status(500).json({ error: "Failed to share record" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
