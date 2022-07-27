export const capitalize = (value: string) => {
  const firstChar = value[0];
  const upperFirstChar = firstChar.toUpperCase();

  return `${upperFirstChar}${value.slice(1)}`;
};
