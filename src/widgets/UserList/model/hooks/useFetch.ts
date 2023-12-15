import { useEffect } from "react";
import { usersModel } from "entities/users";
import { useAppDispatch } from "shared/hooks";

export const useFetch = () => {
  const dispatch = useAppDispatch();

  const page = usersModel.hooks.useSelectCurrentPage();
  const search = usersModel.hooks.useSelectSearch();
  const sortByTokens = usersModel.hooks.useSelectSortByTokens();
  const users = usersModel.hooks.useSelectUsers();

  useEffect(() => {
    dispatch(
      usersModel.thunks.getUsersAsync({
        query: {
          search: search || undefined,
          page,
          orderBy: sortByTokens ?? undefined,
        },
      }),
    );
  }, [page, search, sortByTokens]);

  return {
    users,
  };
};
