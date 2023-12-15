import { FC } from "react";
import DeleteIcon from "shared/icons/trash.svg";
import { Button } from "shared/ui/Button";

type DeleteUserProps = {
  userId: string;
};

export const DeleteUser: FC<DeleteUserProps> = () => {
  return (
    <Button>
      <DeleteIcon />
    </Button>
  );
};
