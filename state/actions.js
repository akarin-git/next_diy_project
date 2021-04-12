import { SET_USER, SET_POST } from "./types";

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const upPost = (post) => ({
  type: SET_POST,
  post,
});