import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";

export const store = configureStore({
  reducer: { auth: authReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// селекторы
export const selectIsAuthenticated = (s: RootState) => s.auth.isAuthenticated;
export const selectUserEmail       = (s: RootState) => s.auth.email;
export const selectUserName        = (s: RootState) => s.auth.name;

// красивое имя из email (user_name -> User Name)
export const nameFromEmail = (email?: string | null) => {
  if (!email) return null;
  const core = email.split("@")[0];
  const spaced = core.replace(/[._-]+/g, " ").trim();
  return spaced ? spaced.replace(/\b\w/g, (c) => c.toUpperCase()) : null;
};