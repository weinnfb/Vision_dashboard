export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";

type LoginPayload = {
  email: string;
  name?: string | null;      // имя необязательно
};

export const login = (email: string, name?: string | null) => ({
  type: LOGIN,
  payload: { email, name: name ?? null } as LoginPayload,
});

export const logout = () => ({ type: LOGOUT });