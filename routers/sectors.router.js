const router = require("express").Router();
const { getFormSectors } = require("../controllers/formSectors.controller");

router.get("/", getFormSectors);

module.exports = router;
