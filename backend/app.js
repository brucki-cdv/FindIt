const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./utlis/appError");
const reportsRouter = require("./routes/reportRoute");
const userInformationRouter = require("./routes/userInformationRoute");
const userRouter = require("./routes/userRoute");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use("/api/v1/report", reportsRouter);
app.use("/api/v1/userInformation", userInformationRouter);
app.use("/api/v1/user", userRouter);

app.all("*", (req, res, next) => {
  next(`Can't find this path`);
});

app.use(globalErrorHandler);
module.exports = app;
