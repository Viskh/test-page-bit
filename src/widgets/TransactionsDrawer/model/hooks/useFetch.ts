import { useEffect } from "react";
import { transactionsModel } from "entities/transactions";
import { useAppDispatch } from "shared/hooks";

type UseFetchParams = {
  userId?: string;
};

export const useFetch = ({ userId }: UseFetchParams) => {
  const dispatch = useAppDispatch();

  const filteredTransactions =
    transactionsModel.hooks.useSelectFilteredTransactions();
  const transactions = transactionsModel.hooks.useSelectTransactions();

  useEffect(() => {
    if (userId) {
      dispatch(
        transactionsModel.thunks.getTransactionsAsync({
          userId,
        }),
      );
    }

    return () => {
      dispatch(transactionsModel.actions.resetState());
    };
  }, [userId]);

  return {
    transactions,
    filteredTransactions,
  };
};
