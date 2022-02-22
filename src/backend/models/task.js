var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String },
  start_time: { type: Date },
  end_time: { type: Date },
  completed: { type: Boolean },
  location: { type: String },
});

// Virtual for task's URL
TaskSchema.virtual("url").get(function () {
  return "/task/" + this._id;
});

//Export model
module.exports = mongoose.model("Task", TaskSchema);
