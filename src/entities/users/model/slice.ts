import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "shared/api";

import { getUsersAsync } from "./thunks";

type SortType = {
  tokens: "tokens:asc" | "tokens:desc" | null;
};

type InitialState = {
  users: User[];
  pages: number;
  currentPage: number;
  search: string;
  sortBy: SortType;
  selectedUser: User | null;
};

const initialState: InitialState = {
  users: [],
  pages: 0,
  currentPage: 1,
  search: "",
  sortBy: {
    tokens: null,
  },
  selectedUser: null,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetState: () => initialState,

    setCurrentPage: (
      state,
      { payload }: PayloadAction<InitialState["currentPage"]>,
    ) => {
      state.currentPage = payload;
    },

    setSearch: (state, { payload }: PayloadAction<InitialState["search"]>) => {
      state.search = payload;
    },

    setSelectedUser: (
      state,
      { payload }: PayloadAction<InitialState["selectedUser"]>,
    ) => {
      state.selectedUser = payload;
    },

    setSortByTokens: (
      state,
      { payload }: PayloadAction<SortType["tokens"]>,
    ) => {
      state.sortBy.tokens = payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(
      getUsersAsync.fulfilled,
      (state, { payload: { data, pages } }) => {
        (state.users = data), (state.pages = pages);
      },
    );
  },
});

export const { reducer, actions } = slice;
