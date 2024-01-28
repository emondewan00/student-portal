const UserModel = require("../models/user");
const express = require("express");
const router = express.Router();

//get users
router.get("/", async (req, res) => {
  try {
    const result = await UserModel.find();
    res.status(200).json({
      status: "Success",
      length: result?.length,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

//find a user using email
router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const result = await UserModel.findOne({ email });
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

//post a user
router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const result = await UserModel.create(user);
    res.status(201).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router ;
