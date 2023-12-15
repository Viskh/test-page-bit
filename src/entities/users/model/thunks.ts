import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, GetUsersParams } from "shared/api";

export const getUsersAsync = createAsyncThunk(
  "users/get",
  async ({ query }: GetUsersParams) => {
    const data = await getUsers({ query });

    return data;
  },
);
