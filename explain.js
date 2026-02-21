// const numbers = [1, 15, 2, 34, 21, 3, 2, 19]

const users = [
  { name: "вася", age: 28 },
  { name: "петя", age: 4 },
  { name: "костя", age: 120 },
];
 users.sort((a, b) => {
  return a.age - b.age;
});
console.log(users);
