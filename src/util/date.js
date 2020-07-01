const formatUnit = (unit) => {
  return unit < 10 ? `0${unit}` : unit
}

const formateDate = (data) => {
  return `${formatUnit(data.getDate())}/${formatUnit(
    data.getMonth() + 1
  )}/${formatUnit(data.getFullYear())}`
}

const formateHour = (data) => {
  return `${formatUnit(data.getHours())}:${formatUnit(
    data.getMinutes()
  )}:${formatUnit(data.getSeconds())}`
}

const createDate = (data) => {
  const timeStamp = new Date(data)

  return `${formateDate(timeStamp)} | ${formateHour(timeStamp)}`
}

export default createDate
