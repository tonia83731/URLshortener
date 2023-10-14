import mongoose from "mongoose";
import dotenv from 'dotenv'
import URL from "../url.js";
import URLgenerator from "../../url_generator.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}


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
  const url = URLgenerator()
  // console.log(typeof url)
  URL.create({ url: `http://localhost:3000/${url}` });
});