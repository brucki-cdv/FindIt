const dotenv = require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./models");


app.listen(process.env.PORT, () => {
  console.log(`Application has been running on port ${process.env.PORT}`);
});

sequelize
  .sync({alter: true})
  .then(() => console.log('Sync ok'))
  .catch((err) => console.log(err));

sequelize
  .authenticate()
  .then(() => console.log("Authentication successfull"))
  .catch((err) => console.log(err));
