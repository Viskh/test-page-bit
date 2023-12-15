import { FC } from "react";
import { Transaction } from "shared/api";
import { Text } from "shared/ui/Text";

import { formatDate } from "../ChartTransactions/utils/formatDate";

export type RowProps = {
  transaction: Pick<Transaction, "type" | "amount" | "created_at">;
};

export const Row: FC<RowProps> = ({ transaction }) => {
  const { created_at, amount, type } = transaction;
  return (
    <tr>
      <td>
        <Text align="center">{type}</Text>
      </td>
      <td>
        <Text align="center">{amount}</Text>
      </td>
      <td>
        <Text align="center">{formatDate(created_at)}</Text>
      </td>
    </tr>
  );
};
