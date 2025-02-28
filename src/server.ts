import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "https://leetcode-stats-generator.vercel.app", 
  methods: ["GET"], 
  allowedHeaders: ["Content-Type"], 
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(routes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
