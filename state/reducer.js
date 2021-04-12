import { SET_USER, SET_POST } from "./types";

export const initialState = {
  user: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case SET_POST:
      return { ...state, post: { ...state.post, ...action.post } };
    default:
      return state;
  }
};