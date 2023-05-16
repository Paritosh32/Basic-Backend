import express from "express";
import mongoose from "moongoose";

const app = express();
import path from "path";
// setting view engine

app.use(express.static(path.join(path.resolve(), "public")));

//using middleware...to access data
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { name: "paritosh" });
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.render("hello");
});

app.listen(5000, () => {
  console.log("server is working");
});
