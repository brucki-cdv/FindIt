const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../utlis/appError");
const { User } = require("../models");

const sendToken = (user, req, res) => {
  let token = signToken(user.id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
    message: "Token sent successfully",
    jwt: {
      token,
    },
  });
};

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: process.env.JWT_COOKIE_EXPIRES_IN,
  });
  return token;
};

exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, password, email, phoneNumber } = req.body;
    if (!firstName || !lastName || !password || !email || !phoneNumber) {
      return next(new AppError("Please provide email and password!", 400));
    }

    const user = await User.findOne({ where: { email: email } });
    if (user) {
      return next(
        new AppError("User with that information already exits", 400)
      );
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      password: encryptedPassword,
      email,
      phoneNumber,
    });

    if (!newUser) {
      new AppError("Something went wrong while creating new user", 401);
    }

    sendToken(newUser, req, res);
  } catch (error) {
    console.log(error.message);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("Please provide email and password!", 400));
    }

    const user = await User.findOne({ where: { email: email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }

    sendToken(user, req, res);
  } catch (error) {
    console.log(error.message);
  }
};

exports.protectRoute = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(
        new AppError("You are not logged in! Please log in to get access.", 401)
      );
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY, process.env);
    const user = User.findOne({ where: { id: decoded.id } });

    if (!user) {
      return next(
        new AppError(
          "The user belonging to this token does no longer exist.",
          401
        )
      );
    }

    next();
  } catch (error) {
    console.log(error.message);
  }
};
