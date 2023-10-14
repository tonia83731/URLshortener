import express from "express";
import exphbs from "express-handlebars";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import URLgenerator from "./url_generator.js";
import URL from "./models/url.js";

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

app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/output", (req, res) => {
 res.render("output");
})
app.post("/generate", (req, res) => {
  const url = req.body.url
  const shortenUrl = URLgenerator()
  
  // URL.create({
  //   url, shortenUrl
  // })
});

app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
