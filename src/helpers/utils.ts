export const capitalize = (value: string) => {
  const firstChar = value[0];
  const upperFirstChar = firstChar.toUpperCase();

  return `${upperFirstChar}${value.slice(1)}`;
};

export const toNumber = (value: string) => {
  if (/^\d+$/.test(value)) {
    return Number(value);
  }

  return value;
};
