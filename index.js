import { file } from './lib/file.js';

const createFileStatus = await file.create('users', 'petras.json', {
  name: 'Petras'
});
console.log(createFileStatus);

const readFileStatus1 = await file.read('users', 'petras.json');
console.log(readFileStatus1);

const updateFileStatus = await file.update('users', 'petras.json', {
  name: 'Petras',
  age: 99
});
console.log(updateFileStatus);

const readFileStatus2 = await file.read('users', 'petras.json');
console.log(readFileStatus2);

const deleteFileStatus = await file.delete('users', 'petras.json');
console.log(deleteFileStatus);

const readFileStatus3 = await file.read('users', 'petras.json');
console.log(readFileStatus3);
