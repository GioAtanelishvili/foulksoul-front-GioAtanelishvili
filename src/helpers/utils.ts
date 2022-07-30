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

export const extractPageNumber = (search: string) => {
  const start = search.indexOf('?page=') + 6;
  const end = start + 1;

  return search.slice(start, end);
};

export const findDestination = (index: number) => {
  if (index % 3 === 1) {
    return Math.floor(index / 3);
  } else {
    return Math.ceil(index / 3);
  }
};
