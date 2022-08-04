import { Member } from 'types';

export const capitalize = (value: string) => {
  const firstChar = value[0];
  const upperFirstChar = firstChar.toUpperCase();

  return `${upperFirstChar}${value.slice(1)}`;
};

export const toNumber = (value: string) => {
  const INT_REGEXP = /^\d+$/;

  if (INT_REGEXP.test(value)) {
    return Number(value);
  }

  return value;
};

export const extractPageNumber = (search: string) => {
  const start = search.indexOf('?page=') + 6;
  const end = start + 1;

  return search.slice(start, end);
};

export const calcScaling = () => {
  const scalingOptions = ['scale-70', 'scale-80', 'scale-90', 'scale-100'];
  const index = Math.floor(Math.random() * 4);

  return scalingOptions[index];
};

export const calcOrbitRatios = (members: Member[]) => {
  const maxOrbitRadius = members.reduce((max, member) => {
    return member.orbitRadius > max ? member.orbitRadius : max;
  }, 0);

  const orbitRatios = members.map(
    (member) => member.orbitRadius / maxOrbitRadius
  );

  return orbitRatios;
};

export const calcAnimationTimings = (orbitRatios: number[]) => {
  return orbitRatios.map((orbitRatio) =>
    orbitRatio * 20 > 1 ? orbitRatio * 20 : orbitRatio * 20 + 1
  );
};

export const sortMembersByRadius = (members: Member[]) => {
  return members.sort(({ orbitRadius: a }, { orbitRadius: b }) => b - a);
};
