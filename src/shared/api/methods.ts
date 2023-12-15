import { type AxiosRequestConfig, type AxiosResponse } from "axios";

import { instance } from "./instance";

export type ApiParams<D extends object = Record<string, unknown>> = {
  url: string;
  params?: unknown;
  data?: D;
} & Pick<AxiosRequestConfig<D>, "headers">;

const unwrapResponse = async <D extends object | string | void = void>(
  response: Promise<{ data: D }>,
) => {
  const { data } = await response;

  return data;
};

export const apiGet = async <
  T extends object | string | void = void,
  D extends object = Record<string, unknown>,
>({
  url,
  params,
  headers,
}: Pick<ApiParams<D>, "url" | "params" | "headers">) => {
  return await unwrapResponse<T>(
    instance.get<D, AxiosResponse<T>>(url, {
      params,
      headers,
    }),
  );
};
