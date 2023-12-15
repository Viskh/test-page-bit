import { FC, ReactNode } from "react";
import { User } from "shared/api";
import { Container } from "shared/ui/Container";
import { Text } from "shared/ui/Text";

export type RowProps = {
  user: User;
  renderEditButton: (id: string) => ReactNode;
  renderDeleteButton: (id: string) => ReactNode;
  onClickRow: (user: User) => void;
};

export const Row: FC<RowProps> = ({
  user,
  renderDeleteButton,
  renderEditButton,
  onClickRow,
}) => {
  const {
    id,
    email,
    name,
    role,
    subscription: {
      tokens,
      plan: { type },
    },
  } = user;

  const onClick = () => {
    onClickRow(user);
  };

  return (
    <tr onClick={onClick}>
      <td>
        <Text align="center">{email}</Text>
      </td>
      <td>
        <Text align="center">{name}</Text>
      </td>
      <td>
        <Text align="center">{role}</Text>
      </td>
      <td>
        <Text align="center">{type}</Text>
      </td>
      <td>
        <Text align="center">{tokens} TKN</Text>
      </td>
      <td>
        <Container gap={10} align="center" justify="center">
          {renderEditButton(id)}

          {renderDeleteButton(id)}
        </Container>
      </td>
    </tr>
  );
};
