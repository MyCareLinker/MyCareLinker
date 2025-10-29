import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

// Fix for __dirname not existing in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS for your frontend domains
app.use(cors({
  origin: ["https://mycarelinker.vercel.app", "https://www.mycarelinker.com"],
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => res.send("MyCareLinker backend is running!"));

// Patients route with FHIR name array fix
app.get("/patients", (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "mockPatients.json"), "utf-8");
    const patients = JSON.parse(data);

    // ✅ Fix: ensure `name` is always an array for each patient
    const fixedPatients = patients.map((p) => ({
      ...p,
      name: Array.isArray(p.name) ? p.name : [p.name],
    }));

    res.json({ entry: fixedPatients.map((p) => ({ resource: p })) });
  } catch (error) {
    console.error("Error reading mockPatients.json:", error);
    res.status(500).json({ error: "Failed to load patients" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));