import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: backendUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data: { email: string; password: string }) =>
  await api.post("/api/users/login", data);
