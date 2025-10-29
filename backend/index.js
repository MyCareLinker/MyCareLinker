import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mockPatients from "./mockPatients.json" assert { type: "json" };

dotenv.config();
const app = express();

// Enable CORS for your frontend domains
app.use(cors({
  origin: ["https://mycarelinker.vercel.app", "https://www.mycarelinker.com"]
}));

app.use(express.json());

// test route
app.get("/", (req, res) => res.send("MyCareLinker backend is running!"));

// /patients route returns mock data
app.get("/patients", (req, res) => {
  res.json({ entry: mockPatients.map(p => ({ resource: p })) });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));