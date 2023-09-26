export function getDayInKor(date: Date) {
  const daysOfWeekInKor = ['일', '월', '화', '수', '목', '금', '토'];
  return daysOfWeekInKor[date.getDay()];
}
