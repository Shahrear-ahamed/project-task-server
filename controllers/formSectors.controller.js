const formSectorService = require("../services/formSectors.service");
const formSectorController = {};

formSectorController.getFormSectors = async (req, res) => {
  try {
    const formSectors = await formSectorService.getFormSectors();

    if (formSectors.length === 0) {
      throw new Error("No form sectors found");
    }

    res.status(200).json({ message: "Form sectors found", formSectors });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = formSectorController;
