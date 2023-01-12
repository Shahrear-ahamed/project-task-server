const { Schema, model } = require("mongoose");

const UserDetailsSchema = new Schema({
  name: String,
  sectors: String,
  terms: Boolean,
});

const userDetails = model("userDetails", UserDetailsSchema);

module.exports = userDetails;
