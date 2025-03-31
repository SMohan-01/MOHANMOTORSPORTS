import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const loginUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = loginUserSlice.actions;
export default loginUserSlice.reducer;
