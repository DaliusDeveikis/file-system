import fs from 'fs/promises';

export const file = {};

file.create = (dir, fileName, content) => {
  let fileDesscriptor = null;
  try {
    console.log('Kuriamas failas...');
    return true;
  } catch (error) {
    return false;
  }
};

file.read = (dir, fileName) => {
  console.log('Skaitomas failas....');
};

file.update = (dir, fileName, content) => {
  console.log('Atnaujinamas failas....');
};

file.delete = (dir, fileName) => {
  console.log('Trinamas failas....');
};
