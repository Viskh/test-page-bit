import clsx from "clsx";
import { usersModel } from "entities/users";
import { useAppDispatch, usePagination } from "shared/hooks";
import Arrow from "shared/icons/small-arrow.svg";
import { generateJsxKey } from "shared/lib";

import styles from "./styles.module.scss";

export const Pagination = () => {
  const dispatch = useAppDispatch();

  const currentPage = usersModel.hooks.useSelectCurrentPage();
  const totalPage = usersModel.hooks.useSelectPages();
  const setPage = usersModel.actions.setCurrentPage;

  const { pages } = usePagination({
    currentPage,
    totalPage,
  });

  if (currentPage === 0 || pages.length < 2) {
    return null;
  }

  const isFirstPage = currentPage === 1;
  const lastPage = pages.at(-1);
  const isLastPage = lastPage === currentPage;

  const onNext = () => {
    dispatch(setPage(currentPage + 1));
  };

  const onPrevious = () => {
    dispatch(setPage(currentPage - 1));
  };

  const onChangePage = (page: number) => () => {
    dispatch(setPage(page));
  };

  return (
    <ul className={styles.container}>
      <li
        className={clsx(isFirstPage && styles.disabled, styles.page)}
        onClick={!isFirstPage ? onPrevious : undefined}
      >
        <span className={styles.arrow__left}>
          <Arrow />
        </span>
      </li>

      {pages.map((page, index) => {
        const isSelected = page === currentPage;
        const isSeparator = typeof page !== "number";

        return (
          <li
            key={generateJsxKey(page, index)}
            className={clsx(
              styles.page,
              isSelected && styles.selected,
              isSeparator && styles.separator,
            )}
            onClick={!isSeparator ? onChangePage(page) : undefined}
          >
            {page}
          </li>
        );
      })}

      <li
        className={clsx(isLastPage && styles.disabled, styles.page)}
        onClick={!isLastPage ? onNext : undefined}
      >
        <span className={styles.arrow__right}>
          <Arrow />
        </span>
      </li>
    </ul>
  );
};
