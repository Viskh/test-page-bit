export enum ProviderTransaction {
  YOOMONEY = "YOOMONEY",
  CRYPTO = "CRYPTO",
  SYSTEM = "SYSTEM",
}

export enum CurrencyTransaction {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
  SYSTEM_TOKEN = "SYSTEM_TOKEN",
}

export enum StatusTransaction {
  FAILED = "FAILED",
  SUCCEDED = "SUCCEDED",
  PENDING = "PENDING",
}

export enum TypeTransaction {
  SUBSCRIPTION = "SUBSCRIPTION",
  WRITE_OFF = "WRITE_OFF",
  REPLENISH = "REPLENISH",
  WITHDRAW = "WITHDRAW",
}

export type Transaction = {
  id: string;
  provider: ProviderTransaction;
  currency: CurrencyTransaction;
  meta: Record<string, string> | null;
  amount: number;
  status: StatusTransaction;
  type: TypeTransaction;
  plan_id: string | null;
  user_id: string;
  referral_id: string | null;
  external_id: string | null;
  created_at: string;
};
