import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// These are the types your Registration page is trying to import
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;