var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TasksSchema = new Schema({
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
  return "/tasks/" + this._id;
});

//Export model
module.exports = mongoose.model("Tasks", TasksSchema);
