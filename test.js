// const msc = '67ceb6548c75f00047c8f78d'
// // const chumikha = '67ceb6548c75f00047c8f820'
// const spb = '67ceb6548c75f00047c8f78e'

// fetch(
//   `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${msc}&to_city_id=${spb}`,
// ).then((response) =>
//   response.json().then((data) => {
//     // console.log("routes", data.items.length);
//   }),
// );

// const formatDate = (msc) => {
//     const date = new Date(msc)
//     let hours = date.getHours().toString()
//     let minutes = date.getMinutes().toString()
//     console.log(date)
// if (minutes.length === 1) {
//     minutes = `0${minutes}`
// }
// if (hours.length === 1) {
//     hours = `0${hours}`
// }
// const rezult = `${hours}:${minutes}`
// return rezult
// }
// formatDate(1705066922)
// formatDate(1705352702)

// console.log(1705352702 - 1705066922)

const seetsList = {
  first: "Люкс",
  second: "Купе",
  third: "Плацкарт",
  fourth: "Сидячий",
};

// console.log(Object.values(seetsList))

// https://students.netoservices.ru/fe-diplom/routes?from_city_id=67ceb6548c75f00047c8f78d&to_city_id=67ceb6548c75f00047c8f78e

// const getCityId = async (name) => {
//   const response = await fetch(
//     `https://students.netoservices.ru/fe-diplom/routes/cities?name=${name}`,
//   );
//   const data = await response.json();
//   return data[0]._id
// };
// // getCityId('москва')
// // getCityId('санкт-петербург')
// const findTrains = async () => {

//     const cityFrom = await getCityId('москва')
//     const cityTo = await getCityId('анапа')
//     // let longLink = `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${cityFrom}&to_city_id=${cityTo}&date_start=${newTicket.dateStart}&date_end=${newTicket.dateEnd}`
//     let shortLink = `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${cityFrom}&to_city_id=${cityTo}`
//     // let url = newTicket.dateStart !== '' && newTicket.dateEnd !== '' ? longLink : shortLink

//     fetch(shortLink).then((response) =>
//       response.json().then((data) => {
//         // setTrains(data.items);
//         console.log(data.items)
//       }),
//     );
//   };
// // findTrains()

const trains = [
  {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    is_express: false,
    min_price: 675,
    available_seats: 112,
    available_seats_info: { first: 18, second: 32, fourth: 62 },
    departure: {
      _id: "67ceb6728c75f00047c91637",
      have_first_class: true,
      have_second_class: true,
      have_third_class: false,
      have_fourth_class: true,
      have_wifi: true,
      have_air_conditioning: true,
      is_express: false,
      min_price: 675,
      duration: 362220,
      available_seats: 112,
      available_seats_info: [Object],
      train: [Object],
      from: [Object],
      to: [Object],
      price_info: [Object],
    },
  },
  {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    is_express: false,
    min_price: 1578,
    available_seats: 143,
    available_seats_info: { second: 96, third: 48 },
    departure: {
      _id: "67ceb6648c75f00047c90a89",
      have_first_class: false,
      have_second_class: true,
      have_third_class: true,
      have_fourth_class: false,
      have_wifi: true,
      have_air_conditioning: true,
      is_express: false,
      min_price: 1578,
      duration: 128760,
      available_seats: 143,
      available_seats_info: [Object],
      train: [Object],
      from: [Object],
      to: [Object],
      price_info: [Object],
    },
  },
  {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    is_express: false,
    min_price: 2575,
    available_seats: 47,
    available_seats_info: { third: 48 },
    departure: {
      _id: "67ceb66e8c75f00047c91328",
      have_first_class: false,
      have_second_class: false,
      have_third_class: true,
      have_fourth_class: false,
      have_wifi: true,
      have_air_conditioning: false,
      is_express: false,
      min_price: 2575,
      duration: 107100,
      available_seats: 47,
      available_seats_info: [Object],
      train: [Object],
      from: [Object],
      to: [Object],
      price_info: [Object],
    },
  },
  {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    is_express: false,
    min_price: 2205,
    available_seats: 98,
    available_seats_info: { first: 18, second: 32, third: 48 },
    departure: {
      _id: "67ceb6838c75f00047c92489",
      have_first_class: true,
      have_second_class: true,
      have_third_class: true,
      have_fourth_class: false,
      have_wifi: true,
      have_air_conditioning: true,
      is_express: false,
      min_price: 2205,
      duration: 213000,
      available_seats: 98,
      available_seats_info: [Object],
      train: [Object],
      from: [Object],
      to: [Object],
      price_info: [Object],
    },
  },
  {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    is_express: false,
    min_price: 967,
    available_seats: 174,
    available_seats_info: { second: 64, third: 48, fourth: 62 },
    departure: {
      _id: "67ceb6788c75f00047c91baa",
      have_first_class: false,
      have_second_class: true,
      have_third_class: true,
      have_fourth_class: true,
      have_wifi: true,
      have_air_conditioning: true,
      is_express: false,
      min_price: 967,
      duration: 102840,
      available_seats: 174,
      available_seats_info: [Object],
      train: [Object],
      from: [Object],
      to: [Object],
      price_info: [Object],
    },
  },
];

// const sortTrains = (trains, selectedSort) => {
//      const sorted = trains.slice().sort((a, b)=> {
//         return a.departure[selectedSort] - b.departure[selectedSort]
//      })
//      return sorted
// }
// console.log(sortTrains(trains, 'duration'))

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
// filterTrains(trains, 'have_second_class')
// console.log(filterTrains(trains, ["have_first_class", "have_second_class", 'have_third_class']));

// const deleteFilter = (arr, del) => {
//       const filter = []
//       for (let el of arr) {
//           if (el !== del) {
//             filter.push(el)
//           }
//       }
//       return filter
// }
// deleteFilter(['have_second_class', 'have_first_class', 'have_fourth_class'], 'have_first_class')

const findMinMax = (trains) => {
  const prices = [];
  for (let train of trains) {
    prices.push(train.min_price);
  }
  prices.sort((a, b) => {
    return a - b;
  });
  return [prices[0], prices[prices.length - 1]];
};
// console.log(findMinMax(trains))

const filterPrice = (trains, min, max) => {
  const rezult = [];
  for (let train of trains) {
    if (train.min_price >= min && train.min_price <= max) {
      rezult.push(train);
    }
  }
  return rezult;
};
// filterPrice(trains, 1000, 3000)

const getTrain = (trains, id) => {
  for (let train of trains) {
    if (train.departure._id === id) {
      return train;
    }
  }
};
// console.log(getTrain(trains, '67ceb6788c75f00047c91baa'))

// const travelTime = (ms) => {
//   const date = new Date(ms);
//   let hours = (date.getHours() - 1).toString();
//   let minutes = date.getMinutes().toString();
//   const rezult = `${hours} : ${minutes}`;
//   return rezult;
// };

const formatWord = (time, words) => {
  if (
    time.endsWith("11") ||
    time.endsWith("12") ||
    time.endsWith("13") ||
    time.endsWith("14")
  ) {
    return words[2];
  } else if (time.endsWith("1") && Number(time) != 11) {
    return words[0];
  } else if (time.endsWith("2") || time.endsWith("3") || time.endsWith("4")) {
    return words[1];
  } else {
    return words[2];
  }
};

// const travelTimeLong = (ms) => {
//   const timeStr = travelTime(ms);

//   const [hour, minutes] = timeStr.split(":").map((el) => el.trim());
//   let textHour = formatWord(hour, ["час", "часа", "часов"]);
//   let textMinutes = formatWord(minutes, ["минута", "минуты", "минут"]);
//   const rezult = `${hour} ${textHour} ${minutes} ${textMinutes}`;
//   return rezult;
// };
// travelTimeLong(102840);

// const obj = {name: 'ghjhgjh', password: '1234'}
// const key = 'name'
// console.log(obj[key])

const randomSeats = (number) => {
  const number1 = Math.floor(Math.random() * number);
  const number2 = number - number1;
  return [number1, number2];
};
// randomSeats(73)

const getInfo = async () => {
  const response = await fetch(
    "https://students.netoservices.ru/fe-diplom/routes/67ceb67d8c75f00047c91fcd/seats",
  );
  const rezult = await response.json();
  return rezult;
};

// const getTicketPrice = async (type) => {
//     const carriages = await getInfo()
//     for (let carriage of carriages) {
//       if (carriage.coach.class_type === type) {
//         return {top_price: carriage.coach.top_price, bottom_price: carriage.coach.bottom_price}
//       }
//     }

// }
// getTicketPrice('first').then((response)=> {
//     // console.log(response)
// })

const countTickets = (passengers) => {
  const adult = Number(passengers.adult);
  const children = Number(passengers.children);
  const child = +passengers.child_no_seat;
  const sum = adult + children + child;
  return sum;
};

// countTickets({
//       adult: '2',
//       children: "1",
//       child_no_seat: "3",
//     })

const formatCity = (city) => {
  const hasSpace = city.includes(" ");
  const hasHyphen = city.includes("-");
  const words = city
    .split(/[ -]/)
    .map((el) => {
      return el[0].toUpperCase() + el.slice(1, el.length);
    })
    .join(hasHyphen ? "-" : " ");
  return words;
};
// formatCity('москва')
// formatCity('санкт-петербург')
// formatCity('нижний новгород')

const getTrainsDate = (ms) => {
  const date = new Date(ms);
  const day =
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
  const month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;
  const year = date.getFullYear();
  const fullDate = `${day}.${month}.${year}`;
  return fullDate;
};
// getTrainsDate(1705069777)
import { v4 as uuidv4 } from "uuid";
const createUsers = (count) => {
  const users = Array.from({ length: count }, () => {
    return {
      id: uuidv4(),
      type: "adult",
      name: "",
      secondName: "",
      surname: "",
      date: "",
      gender: "M",
      checkbox: false,
      document_type: "passport",
      document_series: "",
      document_number: "",
    };
  });
  return users;
};
// createUsers(3);

// const [tickets, setTickets] = useContext(CountTicketContext);
//   const count = countTickets(tickets);
//   const [users, setUsers] = useState(()=>createUsers(count))

// const userDate = '2026-03-17'.split('-').reverse().join('.')
// console.log(userDate)

const travelTime = (ms) => {
  // const hours = ms / 1000 / 60 / 60
  let min = Math.round(ms / 1000 / 60);
  const hours = Math.floor(min / 60);
  min = min - hours * 60;
  return `${hours}:${min}`;
};
// travelTime(10000000)

const sum = (a = 2, b = 4) => {
  console.log(a + b);
};
// sum(10)

let a = 10;
let b = 5;
let c = a;

a = b;
b = c;

// console.log(a, b)

// const reverce = (a, b) => {

// }
// reverce(a, b)

const phoneNumber = (numbers) => {
  let digits = numbers.replace(/\D/g, '');

  if (digits.startsWith('7')) {
    digits = digits.slice(1);
  }

  digits = digits.slice(0, 10);
  let str = "+7 ";
    if (digits.length > 0) {
    str += ' (' + digits.slice(0, 3);
  }

  if (digits.length >= 3) {
    str += ')';
  }

  if (digits.length > 3) {
    str += digits.slice(3, 6);
  }

  if (digits.length > 6) {
    str += '-' + digits.slice(6, 8);
  }

  if (digits.length > 8) {
    str += '-' + digits.slice(8, 10);
  } 
  return str
};
// phoneNumber('9053904930')
// console.log(phoneNumber("9058989090"));


//Дан массив строк. Сначала отфильтруйте строки, 
// длина которых больше 3 символов.
// Затем с помощью map получите массив длин этих строк.


const words = ['cat', 'elephant', 'dog', 'tiger', 'hi'];
// Ожидаемый результат: [8, 5] // длины слов 'elephant' и 'tiger'
const filterWords = words.filter((el)=> {
  if (el.length > 3) {
    return el
  }
})
const rezult = filterWords.map((el)=> {
    return el.length
})
console.log(rezult)