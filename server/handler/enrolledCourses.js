const express = require("express");
const AppliedModel = require("../models/appliedForCourse");
const router = express.Router();

//get all applyed courses
router.get("/", async (req, res) => {
  try {
    const result = await AppliedModel.find();
    res.status(200).json({
      status: "Success",
      data: result,
      length: result?.length,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

//get applied courses using email
router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const result = await AppliedModel.find({ email }).populate("courseId");
    res.status(200).json({
      status: "Success",
      length: result?.length,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Server error",
    });
  }
});

//apply course
router.post("/", async (req, res) => {
  try {
    const apply = req.body;
    const result = await AppliedModel.create(apply);
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

module.exports = router;
