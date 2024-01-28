const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userHandler = require("./handler/userHandler");
const { default: mongoose } = require("mongoose");
const couresesHandler = require("./handler/couresesHandler");
const enrolledHandler = require("./handler/enrolledCourses");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userHandler);
app.use("/courses", couresesHandler);
app.use("/enrolled", enrolledHandler);

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.listen(5000, () => {
  console.log("app is running ");
});

mongoose
  .connect(process.env.CON_STR)
  .then((res) => console.log("server connected with mongodb"))
  .catch((err) => console.log("server is not connected with mongodb"));
