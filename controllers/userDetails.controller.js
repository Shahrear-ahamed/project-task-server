const { addUserDetailsService } = require("../services/userDetails.service");

const userDetailsController = {};

userDetailsController.addUserDetailsController = async (req, res) => {
  try {
    const data = req.body;
    const result = await addUserDetailsService(data);

    // if new data are not create
    if (!result?._id) {
      throw new Error("User details not added");
    }

    // after successfully added user data in database
    res
      .status(201)
      .json({ message: "User details added successfully", data: result });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = userDetailsController;
