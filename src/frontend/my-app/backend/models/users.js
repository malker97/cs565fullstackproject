const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: { type: String, required: true, minLength: 1, maxLength: 100 },
  description: { type: String },
  image: { data: Buffer, contentType: String },
});

// Virtual for about's URL
UsersSchema.virtual("url").get(function () {
  return "/user/" + this._id;
});

//Export model
module.exports = mongoose.model("Users", UsersSchema);
