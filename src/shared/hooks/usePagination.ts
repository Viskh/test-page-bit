import { useMemo } from "react";

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

type UsePaginationParams = {
  totalPage: number;
  siblingCount?: number;
  currentPage: number;
  separator?: string;
};

export const usePagination = ({
  totalPage,
  siblingCount = 1,
  currentPage,
  separator = "...",
}: UsePaginationParams) => {
  const pages =
    useMemo(() => {
      const totalPageNumbers = siblingCount + 5;

      if (totalPageNumbers >= totalPage) {
        return range(1, totalPage);
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPage);

      const shouldShowLeftSeparator = leftSiblingIndex > 2;
      const shouldShowRightSeparator = rightSiblingIndex < totalPage - 1;

      const firstPageIndex = 1;
      const lastPageIndex = totalPage;

      if (!shouldShowLeftSeparator && shouldShowRightSeparator) {
        const leftItemCount = 3 + siblingCount;
        const leftRange = range(1, leftItemCount);

        return [...leftRange, separator, totalPage];
      }

      if (shouldShowLeftSeparator && !shouldShowRightSeparator) {
        const rightItemCount = 3 + siblingCount;
        const rightRange = range(totalPage - rightItemCount + 1, totalPage);

        return [firstPageIndex, separator, ...rightRange];
      }

      if (shouldShowLeftSeparator && shouldShowRightSeparator) {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [
          firstPageIndex,
          separator,
          ...middleRange,
          separator,
          lastPageIndex,
        ];
      }
    }, [totalPage, siblingCount, currentPage]) || [];

  return { pages };
};
