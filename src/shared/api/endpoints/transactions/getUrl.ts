export type GetUrlParams = {
  userId: string;
};

export const getUrl = ({ userId }: GetUrlParams) =>
  `/user/${userId}/transactions`;
