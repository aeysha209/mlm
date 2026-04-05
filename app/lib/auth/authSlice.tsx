import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null as string | null,
    success: false,
  },
  reducers: {
    resetAuth: (state) => {
      state.isLoading = false;
      state.error = null;
      state.success = false;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetAuth, clearAuthError } = authSlice.actions;
export default authSlice.reducer;