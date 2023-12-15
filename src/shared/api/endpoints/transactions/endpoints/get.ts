import { apiGet } from "../../../methods";
import { getUrl, GetUrlParams } from "../getUrl";

import { Transaction } from "../types";

export type GetTransactionsParams = GetUrlParams;

export const getTransactions = async ({ userId }: GetTransactionsParams) => {
  return await apiGet<Transaction[]>({
    url: getUrl({ userId }),
  });
};
