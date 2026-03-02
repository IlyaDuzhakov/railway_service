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

const formatWord = (time, words) => {
    if (time.endsWith('11') || time.endsWith('12') || time.endsWith('13') || time.endsWith('14')) {
      return words[2]
  }
  else if (time.endsWith('1') && Number(time) != 11) {
     return words[0]
  }
  else if (time.endsWith('2') || time.endsWith('3') || time.endsWith('4')) {
    return words[1]
  }
  else {
    return words[2]
  }
}


const travelTimeLong = (ms) => {

  const timeStr = travelTime(ms)
  
  const [hour, minutes]= timeStr.split(':').map((el)=> el.trim())
  let textHour = formatWord(hour, ['час', 'часа', 'часов'])
  let textMinutes = formatWord(minutes, ['минута', 'минуты', 'минут'])
  const rezult = [`${hour} ${textHour}`, `${minutes} ${textMinutes}`]
  return rezult
}

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

const filterPrice = (trains, min, max) => {
  const rezult = [];
  for (let train of trains) {
    if (train.min_price >= min && train.min_price <= max) {
      rezult.push(train);
    }
  }
  return rezult;
};

const deleteFilter = (arr, del) => {
  const filter = [];
  for (let el of arr) {
    if (el !== del) {
      filter.push(el);
    }
  }
  return filter;
};

const sortTrains = (trains, selectedSort) => {
  const sorted = trains.slice().sort((a, b) => {
    return a.departure[selectedSort] - b.departure[selectedSort];
  });
  return sorted;
};

const findMinMax = (trains) => {
  const prices = [];
  for (let train of trains) {
    prices.push(train.min_price);
  }
  prices.sort((a, b) => {
    return a - b;
  });
  return { min: prices[0], max: prices[prices.length - 1] };
};

const getTrain = (trains, id) => {
  for (let train of trains) {
    if (train.departure._id === id) {
      return train;
    }
  }
};

const randomSeats = (number) => {
    const number1 = Math.floor(Math.random() * number)
    const number2 = number - number1
    return [number1, number2]
}

const getTicketPrice = async (carriages, type) => {
    for (let carriage of carriages) {
      if (carriage.coach.class_type === type) {
        return {top_price: carriage.coach.top_price, bottom_price: carriage.coach.bottom_price}
      }    
    }
    
}

export {
  formatDate,
  travelTime,
  getCityId,
  filterTrains,
  deleteFilter,
  sortTrains,
  findMinMax,
  filterPrice,
  getTrain,
  travelTimeLong,
  randomSeats,
  getTicketPrice,
};
