import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

dotenv.config();
const app = express();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Test route (no auth — for health checks)
app.get("/", (req, res) => res.json({ ok: true, service: "MyCareLinker API" }));

// API key check for all other routes
app.use((req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  const validKey = process.env.API_KEY;
  if (!validKey || !apiKey || apiKey !== validKey) {
    return res.status(401).json({ error: "Invalid or missing API key" });
  }
  next();
});

// Get patients
app.get("/patients", (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "mockPatients.json"), "utf-8");
    const patients = JSON.parse(data);
    res.json({ entry: patients.map(p => ({ resource: p })) });
  } catch (error) {
    console.error("Error reading mockPatients.json:", error);
    res.status(500).json({ error: "Failed to load patients" });
  }
});

// POST /v1/share-record
app.post("/v1/share-record", (req, res) => {
  const { patientId, destinationOrg, documents, consentToken, studyType, dateRange } = req.body;

  if (!patientId || !destinationOrg || !documents || !consentToken) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Simulate storing the record and creating audit log
  const transactionId = uuidv4();
  console.log(`[AUDIT] Transaction ${transactionId} | Patient: ${patientId} | Destination: ${destinationOrg} | Study: ${studyType || "—"} | Range: ${dateRange || "—"}`);

  res.json({
    transactionId,
    status: "success",
    auditLink: `/audit/${transactionId}`
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
