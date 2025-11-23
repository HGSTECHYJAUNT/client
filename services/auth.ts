import apiInstance from "@/lib/axiosInstance";
import { LoginPayload, RegisterPayload } from "@/types/auth";

export const auth = {
  login: async (payload: LoginPayload) => {
    return await apiInstance.post("/auth/login", payload);
  },
  signup: async (payload: RegisterPayload) => {
    return await apiInstance.post("/auth/register", payload);
  },
};
