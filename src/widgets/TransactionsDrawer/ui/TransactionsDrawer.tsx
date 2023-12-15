import { FC } from "react";
import { ChartTransactions, TransactionsTable } from "entities/transactions";
import CloseIcon from "shared/icons/close.svg";
import { Button } from "shared/ui/Button";
import { Container } from "shared/ui/Container";
import { Drawer } from "shared/ui/Drawer";
import { Text } from "shared/ui/Text";

import { useFetch, useSelectSelectedUser } from "../model/hooks";

import styles from "./styles.module.scss";

type TransactionsDrawer = {
  isOpen: boolean;
  onClose: () => void;
};

export const TransactionsDrawer: FC<TransactionsDrawer> = ({
  isOpen,
  onClose,
}) => {
  const { selectedUser } = useSelectSelectedUser();

  const { transactions } = useFetch({ userId: selectedUser?.id });

  if (!selectedUser) return null;

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <Container flexDirection="column" className={styles.content}>
        <Container gap={20} flexDirection="column">
          <Container justify="space-between" align="center">
            <Text size={20} bold>
              {selectedUser.email}
            </Text>

            <Button onClick={onClose}>
              <CloseIcon />
            </Button>
          </Container>

          <Text size={20} bold>
            Использование токенов
          </Text>
        </Container>

        <ChartTransactions transactions={transactions} />
        <div className={styles.list}>
          <TransactionsTable transactions={transactions} />
        </div>
      </Container>
    </Drawer>
  );
};
