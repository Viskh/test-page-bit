import { combineReducers } from "@reduxjs/toolkit";
import { transactionsModel } from "entities/transactions";
import { usersModel } from "entities/users";

export const reducers = combineReducers({
  usersReducer: usersModel.reducer,
  transactionsReducer: transactionsModel.reducer,
});
