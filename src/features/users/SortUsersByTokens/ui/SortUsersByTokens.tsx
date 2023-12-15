import clsx from "clsx";
import { usersModel } from "entities/users";
import { useAppDispatch } from "shared/hooks";
import ArrowIcon from "shared/icons/arrow-down.svg";
import { Button } from "shared/ui/Button";

import styles from "./styles.module.scss";

export const SortUsersByTokens = () => {
  const dispatch = useAppDispatch();

  const sortedTokens = usersModel.hooks.useSelectSortByTokens();
  const sortByTokens = usersModel.actions.setSortByTokens;

  const isAsc = sortedTokens === "tokens:asc";
  const isDesc = sortedTokens === "tokens:desc";

  const onSort = () => {
    if (sortedTokens !== "tokens:desc") {
      dispatch(sortByTokens("tokens:desc"));
    } else {
      dispatch(sortByTokens("tokens:asc"));
    }
  };

  return (
    <Button
      className={clsx(
        styles.arrow__down,
        isDesc && styles.select__down,
        isAsc && styles.select__up,
      )}
      onClick={onSort}
    >
      <ArrowIcon />
    </Button>
  );
};
