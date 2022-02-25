var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AboutSchema = new Schema({
  name: { type: String, required: true, minLength: 1, maxLength: 100 },
  description: { type: String },
  image: { data: Buffer, contentType: String },
});

// Virtual for about's URL
AboutSchema.virtual("url").get(function () {
  return "/about/" + this._id;
});

//Export model
module.exports = mongoose.model("About", AboutSchema);
