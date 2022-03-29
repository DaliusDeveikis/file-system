import { file } from './lib/file.js';

const users = [
  { name: 'Petras', age: 99, isMarried: true },
  { name: 'Maryte', age: 87, isMarried: false },
  { name: 'Jonas', age: 66, isMarried: false },
  { name: 'Ona', age: 54, isMarried: true }
];

for (const user of users) {
  await file.create('users', user.name.toLowerCase() + '.json', user);
}
