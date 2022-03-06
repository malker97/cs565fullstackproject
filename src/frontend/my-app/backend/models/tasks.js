const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const TasksSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String },
  start_time: { type: Date },
  end_time: { type: Date },
  completed: { type: Boolean },
  location: { type: String },
  user_id: { type: Schema.Types.ObjectId, ref: "Users" },
});

// Virtual for task's URL
TasksSchema.virtual("url").get(function () {
  return "/task/" + this._id;
});

TasksSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

//Export model
module.exports = mongoose.model("Tasks", TasksSchema);
