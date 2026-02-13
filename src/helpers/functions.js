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
  const date = new Date(ms);
  let hours = (date.getHours() - 1).toString();
  let minutes = date.getMinutes().toString();
  const rezult = `${hours} : ${minutes}`;
  return rezult;
};

const getCityId = async (name) => {
  const response = await fetch(
    `https://students.netoservices.ru/fe-diplom/routes/cities?name=${name}`,
  );
  const data = await response.json();
  return data[0]._id;
};

export { formatDate, travelTime, getCityId };
