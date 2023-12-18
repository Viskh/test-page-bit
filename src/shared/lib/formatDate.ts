import { format, Locale, parseISO } from "date-fns";
import { ru } from "date-fns/locale";

export type FormatDateParams = {
  date: string;
  formatDate?: string;
  option?: Record<string, Locale>;
};

export const formatDate = ({
  date,
  formatDate = "dd.MM.yy, HH:mm:ss",
  option = { locale: ru },
}: FormatDateParams) => {
  const originalDate = parseISO(date);
  const formattedDate = format(originalDate, formatDate, option);

  return formattedDate;
};
