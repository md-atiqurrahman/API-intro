const user = {name: 'gorib amir', id: 11, address: 'Bangladesh', job: 'actor'};
//use of JSON stringify to convert a object to a string
const stringifiedUser = JSON.stringify(user);
console.log(stringifiedUser);
console.log(stringifiedUser.job);

//use of JSON parse to convert a stringify object to a javascript object
const converted = JSON.parse(stringifiedUser);
console.log(converted);
console.log(converted.job);

