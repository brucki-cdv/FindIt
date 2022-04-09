const dotenv = require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./models");


app.listen(process.env.PORT, () => {
  console.log(`Application has been running on port ${process.env.PORT}`);
});


sequelize
  .authenticate()
  .then(() => console.log("Authentication successfull"))
  .catch((err) => console.log(err));
