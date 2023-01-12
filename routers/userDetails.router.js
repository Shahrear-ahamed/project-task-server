const router = require("express").Router();
const {
  addUserDetailsController,
} = require("../controllers/userDetails.controller");

router.route("/").post(addUserDetailsController);

module.exports = router;
