const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  author: { type: String },
  url: { type: String },
  image: { data: Buffer, contentType: String },
  date: { type: Date },
});

// //Virtual for news's URL
// NewsSchema.virtual("url").get(function () {
//   return "/news/" + this._id;
// });

//Export model
module.exports = mongoose.model("News", NewsSchema);
