import { AUTHENTICATE_USER } from "../Constants/authConstants";

const initialState = {
  userId: null,
  email: null,
  token: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case AUTHENTICATE_USER:
      return {
        userId: payload.userId,
        email: payload.email,
        token: payload.token,
      };
    default:
      return state;
  }
}
