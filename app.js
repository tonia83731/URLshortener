import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 取得資料庫連線狀態
const db = mongoose.connection;
// 連線異常
db.on("error", () => {
  console.log("mongodb error!");
});
// 連線成功
db.once("open", () => {
  console.log("mongodb connected!");
});

app.get("/", (req, res) => {
  res.send("hello word");
});

app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
