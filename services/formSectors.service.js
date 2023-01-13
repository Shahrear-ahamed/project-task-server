const mongoose = require("mongoose");
const formSectorService = {};

formSectorService.getFormSectors = async () => {
  return await mongoose.connection.db.collection("sectors").find().toArray();
};

module.exports = formSectorService;
