import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends do not exist");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((p) => {
        if (p._id === action.payload.post._id) return action.payload.post;
        return p;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setFriends, setLogin, setLogout, setPost, setPosts } =
  authSlice.actions;

export default authSlice.reducer;
