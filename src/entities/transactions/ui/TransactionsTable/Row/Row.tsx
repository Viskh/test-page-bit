import { FC } from "react";
import { Transaction } from "shared/api";
import { formatDate } from "shared/lib";
import { Text } from "shared/ui/Text";

import { getClassNameByType, getOperatorByType, getType } from "../../../utils";

import styles from "./styles.module.scss";

export type RowProps = {
  transaction: Pick<Transaction, "type" | "amount" | "created_at">;
};

export const Row: FC<RowProps> = ({ transaction }) => {
  const { created_at, amount, type } = transaction;
  return (
    <tr>
      <td>
        <Text align="center">{getType(type)}</Text>
      </td>
      <td>
        <Text align="center" className={styles[getClassNameByType(type)]}>
          {getOperatorByType(type)}
          {amount} BTKN
        </Text>
      </td>
      <td>
        <Text align="center">{formatDate({ date: created_at })}</Text>
      </td>
    </tr>
  );
};
