const express = require("express");
const Course = require("../models/courses");
const router = express.Router();

//get all courses
router.get("/", async (req, res) => {
  try {
    const result = await Course.find();
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

//post a course
router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const result = await Course.create(body);
    res.status(201).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Server error",
    });
  }
});

module.exports = router;
