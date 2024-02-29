import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   // root route
//   res.send("Server is ready");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});