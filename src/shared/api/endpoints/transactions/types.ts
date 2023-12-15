export type Provider = "YOOMONEY" | "CRYPTO" | "SYSTEM";

export type Currency = "RUB" | "USD" | "EUR" | "SYSTEM_TOKEN";

export type Status = "FAILED" | "SUCCEDED" | "PENDING";

export type Type = "SUBSCRIPTION" | "WRITE_OFF" | "REPLENISH" | "WITHDRAW";

export type Transaction = {
  id: string;
  provider: Provider;
  currency: Currency;
  meta: Record<string, string>;
  amount: 0;
  status: Status;
  type: Type;
  plan_id: string;
  user_id: string;
  referral_id: string;
  external_id: string;
  created_at: string;
};
