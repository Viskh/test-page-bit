import { useAppSelector } from "shared/hooks";

import { selectFilteredTransaction, selectTransactions } from "./selectors";

export const useSelectTransactions = () => useAppSelector(selectTransactions);

export const useSelectFilteredTransactions = () =>
  useAppSelector(selectFilteredTransaction);
