export default function getDayName(date: Date) {
  switch (date.getDay()) {
    case 0:
      return "Sun.";
    case 1:
      return "Mon.";
    case 2:
      return "Tue.";
    case 3:
      return "Wed.";
    case 4:
      return "Thu.";
    case 5:
      return "Fri.";
    case 6:
      return "Sat.";
    default:
      return "Sun.";
  }
}
export function getFullTimeJP(date: Date) {
  let day = "";
  switch (date.getDay()) {
    case 0:
      day = "日";
    case 1:
      day = "月";
    case 2:
      day = "火";
    case 3:
      day = "水";
    case 4:
      day = "木";
    case 5:
      day = "金";
    case 6:
      day = "土";
    default:
      day = "日";
  }
  return date.getFullYear() + "年 " + (date.getMonth() + 1) + "月 " + date.getDate() + "日 " + "（"+ day + "）";
}