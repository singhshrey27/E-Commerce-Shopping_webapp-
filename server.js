import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
// configure env
dotenv.config();
// used to make the port confidential

//rest object
const app = express();

// connecting to database
connectDB();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// all Routes
app.use("/api/v1/auth", authRoutes);

// '/' is used to home page here
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Ecommerce MERN stack project and shrey is working on it</h1>"
  );
});

//PORT for application
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server is running ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});
