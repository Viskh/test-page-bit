import { FC } from "react";
import { Transaction } from "shared/api";
import { Text } from "shared/ui/Text";

import { Row } from "./Row";

import styles from "./styles.module.scss";

type TransactionsTableProps = {
  transactions: Transaction[];
};

export const TransactionsTable: FC<TransactionsTableProps> = ({
  transactions,
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__header}>
          <th>
            <Text color="secondary">Тип</Text>
          </th>
          <th>
            <Text color="secondary">Сумма</Text>
          </th>
          <th>
            <Text color="secondary">Дата</Text>
          </th>
        </tr>
      </thead>

      <tbody className={styles.table__body}>
        {transactions.map(({ id, type, amount, created_at }) => (
          <Row key={id} transaction={{ type, amount, created_at }} />
        ))}
      </tbody>
    </table>
  );
};
