import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTransactions, GetTransactionsParams } from "shared/api";

export const getTransactionsAsync = createAsyncThunk(
  "transactionss/get",
  async ({ userId }: GetTransactionsParams) => {
    const data = await getTransactions({ userId });

    return data;
  },
);
