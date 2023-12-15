import { FC } from "react";
import { UsersTable } from "entities/users";
import { DeleteUser } from "features/users/DeleteUser";
import { EditUser } from "features/users/EditUser";
import { Pagination } from "features/users/Pagination";
import { SearchUsers } from "features/users/SearchUsers";
import { SortUsersByTokens } from "features/users/SortUsersByTokens";
import { Text } from "shared/ui/Text";

import { useFetch, useSelectUser } from "../model/hooks";

import styles from "./styles.module.scss";

type UserListProp = {
  openTransactionDrawer: () => void;
};

export const UserList: FC<UserListProp> = ({ openTransactionDrawer }) => {
  const { onClickRow } = useSelectUser({ onClick: openTransactionDrawer });
  const { users } = useFetch();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Text size={22} bold className={styles.header__title}>
          Моя организация
        </Text>
      </header>

      <div className={styles.list__container}>
        <Text size={22} bold>
          Пользователи
        </Text>

        <SearchUsers />

        <div className={styles.list}>
          <UsersTable
            users={users}
            onClickRow={onClickRow}
            sortButton={<SortUsersByTokens />}
            renderDeleteButton={(userId) => <DeleteUser userId={userId} />}
            renderEditButton={(userId) => <EditUser userId={userId} />}
          />
        </div>

        <div className={styles.pagination}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};
