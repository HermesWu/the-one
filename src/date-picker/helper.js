export default {
  firstDayOfMonth(date){
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month, 1)
  },
  lastDayOfMonth(date){
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month + 1, 0)
  },
  addMonth(date, n){
    let [_1, month, _2] = getYearMonthDate(date)
    let newMonth = month + n
    let copyDate = new Date(date)
    copyDate.setMonth(newMonth)
    return copyDate
  },
  addYear(date, n){
    let [year] = getYearMonthDate(date)
    let newYear = year + n
    let copyDate = new Date(date)
    copyDate.setFullYear(newYear)
    return copyDate
  },
  getYearMonthDate
}
function getYearMonthDate(date){
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return [year, month, day]
}