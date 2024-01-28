const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  skillLevel: {
    type: String,
    required: true,
  },
});

const Course = model("Course", courseSchema);

module.exports = Course;
