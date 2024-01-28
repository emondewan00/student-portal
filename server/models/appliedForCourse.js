const { Schema, model, Types } = require("mongoose");

const appliedSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  courseId: {
    type: Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const AppliedModel = model("AppliedInCoures", appliedSchema);

module.exports = AppliedModel;
