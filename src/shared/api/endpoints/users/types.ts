import { CurrencyTransaction } from "../transactions";

export type User = {
  id: string;
  email: string;
  tg_id: string;
  name: string;
  avatar: string;
  role: Role;
  created_at: string;
  subscription: Subscription;
};

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export enum TypeSubscription {
  FREE = "FREE",
  BASIC = "BASIC",
  PREMIUM = "PREMIUM",
  ELITE = "ELITE",
}

export type Subscription = {
  id: string;
  plan_id: string;
  user_id: string;
  tokens: number;
  additional_tokens: number;
  created_at: string;
  plan: Plan;
};

export type Plan = {
  id: string;
  type: TypeSubscription;
  price: number;
  currency: CurrencyTransaction;
  tokens: number;
};
