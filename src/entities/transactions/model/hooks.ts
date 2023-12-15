import { useAppSelector } from "shared/hooks";

import { selectTransactions } from "./selectors";

export const useSelectTransactions = () => useAppSelector(selectTransactions);
