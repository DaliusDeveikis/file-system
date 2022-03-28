import { file } from './lib/file.js';

const createFileStatus = await file.create('users', 'petras.json', {
  name: 'Petras',
  age: 25
});
console.log(createFileStatus);

const readFileStatus = await file.read('users', 'petras.json');
console.log(readFileStatus);

const createFileStatus1 = await file.create('users', 'maryte.json', {
  name: 'Maryte',
  age: 22
});
console.log(createFileStatus1);

const readFileStatus1 = await file.read('users', 'maryte.json');
console.log(readFileStatus1);

const listStatus = await file.list('users');
console.log(listStatus);

// const updateFileStatus = await file.update('users', 'petras.json', {
//   name: 'Petras',
//   age: 99
// });
// console.log(updateFileStatus);

// const readFileStatus2 = await file.read('users', 'petras.json');
// console.log(readFileStatus2);

// const deleteFileStatus = await file.delete('users', 'petras.json');
// console.log(deleteFileStatus);

// const readFileStatus3 = await file.read('users', 'petras.json');
// console.log(readFileStatus3);
