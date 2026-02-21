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

const filterTrains = (trains, filters) => {
  const arr = [];
  for (let train of trains) {
    let check = true;
    for (let filter of filters) {
      if (train.departure[filter] === false) {
        check = false;
        break;
      }
    }
    if (check === true) {
      arr.push(train);
    }
  }
  return arr;
};

const deleteFilter = (arr, del) => {
      const filter = []
      for (let el of arr) {
          if (el !== del) {
            filter.push(el)
          }
      }
      return filter
}

const sortTrains = (trains, selectedSort) => {
     const sorted = trains.slice().sort((a, b)=> {
        return a.departure[selectedSort] - b.departure[selectedSort]
     })
     return sorted
}

export { formatDate, travelTime, getCityId, filterTrains, deleteFilter, sortTrains };
