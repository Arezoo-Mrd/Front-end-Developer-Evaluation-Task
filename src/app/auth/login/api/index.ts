import { fetchInstance } from "@/utils/fetch-config";
import { LoginRequest, LoginResponse } from "@/@types/login";
import { LOGIN_URL } from "./constants";

export const login = async (request: LoginRequest): Promise<LoginResponse> => {
 const response = await fetchInstance(LOGIN_URL, {
  method: "POST",
  body: JSON.stringify(request),
 });

 return response;
};
