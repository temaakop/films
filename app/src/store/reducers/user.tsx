import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  token: "",
  id: 0,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { actions, reducer } = userSlice;

export const user = reducer;

export const { login } = actions;
