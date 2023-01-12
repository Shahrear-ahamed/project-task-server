const {
  addUserDetailsService,
  updateUserDetailsService,
} = require("../services/userDetails.service");

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

userDetailsController.updateUserDetailsController = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;

    const result = await updateUserDetailsService(data, id);
    console.log(result);

    res.status(200).json({
      message: "User details updated successfully",
      result: result?.update,
      updateData: result?.newData,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = userDetailsController;
