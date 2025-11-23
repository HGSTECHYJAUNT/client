import apiInstance from "@/lib/axiosInstance";
import { LoginPayload } from "@/types/auth";

export const auth = {
  login: async (payload: LoginPayload) => {
    return await apiInstance.post("/auth/login", payload);
  },
};
