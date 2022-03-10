const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const opts = { toJSON: { virtuals: true } };

const TasksSchema = new Schema(
  {
    name: { type: String, default: "No Name" },
    comment: { type: String, default: "No description" },
    start_time: { type: Date },
    end_time: { type: Date },
    completed: { type: Boolean, default: false },
    location: { type: String, default: "No location" },
    user_id: { type: Schema.Types.ObjectId, ref: "Users" },
  },
  opts
);

// Virtual for task's URL
TasksSchema.virtual("url").get(function () {
  return "/task/" + this._id;
});

TasksSchema.virtual("start_date_formatted").get(function () {
  return DateTime.fromJSDate(this.start_time).toLocaleString(
    DateTime.DATETIME_SHORT
  );
});

TasksSchema.virtual("end_date_formatted").get(function () {
  return DateTime.fromJSDate(this.end_time).toLocaleString(
    DateTime.DATETIME_SHORT
  );
});

//Export model
module.exports = mongoose.model("Tasks", TasksSchema);
