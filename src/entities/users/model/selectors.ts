export const selectUsers = ({ usersReducer }: GlobalState) =>
  usersReducer.users;

export const selectPages = ({ usersReducer }: GlobalState) =>
  usersReducer.pages;

export const selectCurrentPage = ({ usersReducer }: GlobalState) =>
  usersReducer.currentPage;

export const selectSearch = ({ usersReducer }: GlobalState) =>
  usersReducer.search;

export const selectSelectedUser = ({ usersReducer }: GlobalState) =>
  usersReducer.selectedUser;

export const selectSortedByTokens = ({ usersReducer }: GlobalState) =>
  usersReducer.sortBy.tokens;
