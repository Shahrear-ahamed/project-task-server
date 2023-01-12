const userDetails = require("../models/UserDetails.model");
const userDetailsModels = {};

userDetailsModels.addUserDetailsService = async (data) => {
  try {
    return await userDetails.create(data);
  } catch (err) {
    throw new Error(err.message);
  }
};

userDetailsModels.updateUserDetailsService = async (data, id) => {
  try {
    const update = await userDetails.updateOne({ _id: id }, data);
    const newData = await userDetails.findById(id);

    return { update, newData };
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = userDetailsModels;
