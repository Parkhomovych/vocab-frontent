import { create } from "zustand";

type AuthStore = {
  name: string;
  email: string;
  token: string;
  refreshToken: string;
  loading: boolean;
};

type AuthAction = {
  updateName: (name: AuthStore["name"]) => void;
  updateEmail: (email: AuthStore["email"]) => void;
  updateToken: (token: AuthStore["token"]) => void;
  updateRefreshToken: (refreshToken: AuthStore["refreshToken"]) => void;
  register: (data: any) => void;
  logIn: (data: any) => void;
  logOut: () => void;
};
const initialState = {
  name: "",
  email: "",
  token: "",
  refreshToken: "",
  loading: false,
};

export const useAuthStore = create<AuthStore & AuthAction>((set) => ({
  ...initialState,
  register: (data) => set((state) => ({})),
  logIn: (data) => set((state) => ({})),
  logOut: () => set(() => ({ ...initialState })),
  updateName: (name) => set(() => ({ name })),
  updateEmail: (email) => set(() => ({ email })),
  updateToken: (token) => set(() => ({ token })),
  updateRefreshToken: (refreshToken) => set(() => ({ refreshToken })),
  toggleLoading: () => set((state) => ({ loading: !state.loading })),
}));
