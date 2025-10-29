import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => res.send("MyCareLinker backend is running!"));

// fetch sample patient data from HAPI FHIR
app.get("/patients", async (req, res) => {
  try {
    const response = await axios.get("https://hapi.fhir.org/baseR4/Patient?_count=5");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
