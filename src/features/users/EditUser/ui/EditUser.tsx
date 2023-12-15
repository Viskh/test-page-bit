import { FC } from "react";
import EditIcon from "shared/icons/edit.svg";
import { Button } from "shared/ui/Button";

type EditUserProps = {
  userId: string;
};

export const EditUser: FC<EditUserProps> = () => {
  return (
    <Button>
      <EditIcon />
    </Button>
  );
};
