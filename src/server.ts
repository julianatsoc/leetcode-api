import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
