import { useAppSelector } from "shared/hooks/useAppSelector";

import {
  selectCurrentPage,
  selectPages,
  selectSearch,
  selectSelectedUser,
  selectSortedByTokens,
  selectUsers,
} from "./selectors";

export const useSelectUsers = () => useAppSelector(selectUsers);

export const useSelectPages = () => useAppSelector(selectPages);

export const useSelectCurrentPage = () => useAppSelector(selectCurrentPage);

export const useSelectSearch = () => useAppSelector(selectSearch);

export const useSelectSelectedUser = () => useAppSelector(selectSelectedUser);

export const useSelectSortByTokens = () => useAppSelector(selectSortedByTokens);
