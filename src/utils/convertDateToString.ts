export function convertDateToString(date: Date) {
  return date.toISOString().slice(0, 10);
}
