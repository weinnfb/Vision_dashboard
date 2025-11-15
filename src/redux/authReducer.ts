import { LOGIN, LOGOUT } from "./authAction";

export type AuthState = {
  isAuthenticated: boolean;
  email: string | null;
  name: string | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  email: null,
  name: null,
};

export function authReducer(
  state: AuthState = initialState,
  action: any
): AuthState {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.email ?? null,
        name: action.payload.name ?? null,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}