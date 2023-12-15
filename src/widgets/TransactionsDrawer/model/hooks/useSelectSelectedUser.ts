import { usersModel } from "entities/users";

export const useSelectSelectedUser = () => {
  const selectedUser = usersModel.hooks.useSelectSelectedUser();

  return { selectedUser };
};
