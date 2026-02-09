const formatDate = (ms) => {
  const date = new Date(ms);
  let hours = (date.getHours() - 1).toString();
  let minutes = date.getMinutes().toString();
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }
  if (hours.length === 1) {
    hours = `0${hours}`;
  }
  const rezult = `${hours}:${minutes}`;
  return rezult;
};

const travelTime = (ms) => {
     const date = new Date(ms)
     let hours = (date.getHours() - 1).toString();
     let minutes = date.getMinutes().toString();
     const rezult = `${hours} : ${minutes}`;
     return rezult;
}

export { formatDate, travelTime }