import { apiGet } from "../../../methods";
import { getUrl } from "../getUrl";

import { User } from "../types";

type GetUsersQuery = {
  search?: string;
  page?: number;
  orderBy?: "tokens:asc" | "tokens:desc";
};

export type GetUsersParams = {
  query: GetUsersQuery;
};

export type GetUsersResponse = {
  data: User[];
  pages: number;
};

export const getUsers = async ({ query }: GetUsersParams) => {
  return await apiGet<GetUsersResponse>({
    url: getUrl(),
    params: query,
  });
};
