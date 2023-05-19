/* eslint-disable import/prefer-default-export */
export const f = (x: number) => x.toString().padStart(2, "0");

export function utcTime(date: Date) {
  return `${f(date.getUTCHours())}:${f(date.getUTCMinutes())}:${f(date.getUTCSeconds())}`;
}

export function utcDate(date: Date) {
  return `${f(date.getUTCDate())}/${f(date.getUTCMonth() + 1)}/${f(date.getUTCFullYear() - 2000)}`;
}
