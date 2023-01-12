const userDetails = require("../models/UserDetails.model");
const userDetailsModels = {};

userDetailsModels.addUserDetailsService = async (data) => {
  try {
    return await userDetails.create(data);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = userDetailsModels;
