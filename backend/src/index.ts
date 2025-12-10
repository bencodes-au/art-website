import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { artpiecesRouter } from "./routes/artpieces";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/artpieces", artpiecesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
