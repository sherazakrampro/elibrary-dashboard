import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TokenStore {
  token: string;
  setToken: (data: string) => void;
}

const useTokenStore = create<TokenStore>(
  persist(
    (set) => ({
      token: "",
      setToken: (data: string) => set(() => ({ token: data })),
    }),
    { name: "token-store" }
  )
);

export default useTokenStore;
