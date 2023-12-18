import { TypeTransaction } from "shared/api";

const types: { [key in TypeTransaction]: string } = {
  SUBSCRIPTION: "Подписка",
  WRITE_OFF: "Списание",
  REPLENISH: "Пополнение",
  WITHDRAW: "Снятие",
};

const operators: { [key in TypeTransaction]: string } = {
  SUBSCRIPTION: "",
  WITHDRAW: "",
  WRITE_OFF: "-",
  REPLENISH: "+",
};

const styles: { [key in TypeTransaction]: string } = {
  SUBSCRIPTION: "subscription",
  WITHDRAW: "withdraw",
  WRITE_OFF: "write__off",
  REPLENISH: "replenish",
};

export const getType = (type: TypeTransaction) => types[type];

export const getOperatorByType = (type: TypeTransaction) => operators[type];

export const getClassNameByType = (type: TypeTransaction) => styles[type];
