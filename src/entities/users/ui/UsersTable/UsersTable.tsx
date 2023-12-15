import { FC, ReactNode } from "react";
import { User } from "shared/api";
import { Container } from "shared/ui/Container";
import { Text } from "shared/ui/Text";

import { Row, RowProps } from "./Row";

import styles from "./styles.module.scss";

export type UsersTableProps = {
  sortButton: ReactNode;
  users: User[];
} & Omit<RowProps, "user">;

export const UsersTable: FC<UsersTableProps> = ({
  users,
  sortButton,
  onClickRow,
  renderDeleteButton,
  renderEditButton,
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__header}>
          <th>
            <Text color="secondary">Email</Text>
          </th>
          <th>
            <Text color="secondary">Имя</Text>
          </th>
          <th>
            <Text color="secondary">Роль</Text>
          </th>
          <th>
            <Text color="secondary">Подписка</Text>
          </th>
          <th>
            <Container gap={10} justify="center">
              <Text color="secondary">Токены</Text>

              {sortButton}
            </Container>
          </th>
          <th>
            <Text color="secondary">Действия</Text>
          </th>
        </tr>
      </thead>

      <tbody className={styles.table__body}>
        {users.map((user) => (
          <Row
            key={user.id}
            user={user}
            onClickRow={onClickRow}
            renderDeleteButton={renderDeleteButton}
            renderEditButton={renderEditButton}
          />
        ))}
      </tbody>
    </table>
  );
};
