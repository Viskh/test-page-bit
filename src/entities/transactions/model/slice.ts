import { createSlice } from "@reduxjs/toolkit";
import { Transaction } from "shared/api";

import { getTransactionsAsync } from "./thunks";

type InitialState = {
  transactions: Transaction[];
};

const initialState: InitialState = {
  transactions: [],
};

const slice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    resetState: () => initialState,
  },

  extraReducers(builder) {
    builder.addCase(getTransactionsAsync.fulfilled, (state, { payload }) => {
      state.transactions = payload;
    });
  },
});

export const { reducer, actions } = slice;
