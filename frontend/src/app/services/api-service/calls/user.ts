import { nextApi } from "@/app/lib/api";

export const getUsers = async () => {
  const response = await nextApi.get("/users");
  return response.data;
};

export const createUser = async () => {
  const response = await nextApi.post("/users");
  return response.data;
};
