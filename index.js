require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// warning info
mongoose.set("strictQuery", false);

// connect to the database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(`DB connection failed because ${err.message}`));

// running the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
