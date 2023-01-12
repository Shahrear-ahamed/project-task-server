const router = require("express").Router();
const {
  addUserDetailsController,
  updateUserDetailsController,
} = require("../controllers/userDetails.controller");

router.route("/").post(addUserDetailsController);
router.route("/:id").put(updateUserDetailsController);

module.exports = router;
