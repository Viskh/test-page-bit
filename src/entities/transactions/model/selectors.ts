import { createSelector } from "@reduxjs/toolkit";
import { TypeTransaction } from "shared/api";

export const selectTransactions = ({ transactionsReducer }: GlobalState) =>
  transactionsReducer.transactions;

export const selectFilteredTransaction = createSelector(
  selectTransactions,
  (transactions) => {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.created_at);

      return (
        transactionDate > twentyFourHoursAgo &&
        transaction.type === TypeTransaction.WRITE_OFF
      );
    });
  },
);
