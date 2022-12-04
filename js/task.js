'use strict';
import users from "./users.js";


//1. Получить массив имен всех пользователей (поле name).

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// 2. Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
console.log(getUsersWithEyeColor(users, 'green'));


//3. Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender).flatMap(user => user.name);

const getUsersWithGender = (users, gender) => users.reduce((userName, user) => {  
  if (user.gender === gender) {
    userName.push(user.name);
  }

  return userName;
}, []);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


//4. Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => users.filter((user) => {
//   return !user.isActive
// });

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
