import { usersModel } from "entities/users";
import { User } from "shared/api";
import { useAppDispatch } from "shared/hooks";

type UseSelectUserParams = {
  onClick?: () => void;
};

export const useSelectUser = ({ onClick }: UseSelectUserParams) => {
  const dispatch = useAppDispatch();

  const onClickRow = (user: User) => {
    onClick?.();

    dispatch(usersModel.actions.setSelectedUser(user));
  };

  return { onClickRow };
};
