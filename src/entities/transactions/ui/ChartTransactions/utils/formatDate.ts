export const formatDate = (value: Date | string) => {
  const date = new Date(value);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return date.toLocaleDateString("ru-RU", options).replace(".", "");
};
