import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const file = {};

file.fullPath = (dir, fileName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, '../.data', dir, fileName);
};

/**
 *
 * @param {*} dir
 * @param {*} fileName
 * @param {*} content
 * @returns
 */

file.create = async (dir, fileName, content) => {
  let fileDesscriptor = null;

  try {
    const filePath = file.fullPath(dir, fileName);
    fileDesscriptor = await fs.open(filePath, 'wx');
    let text = JSON.stringify(content);
    await fs.writeFile(fileDesscriptor, text);
    return true;
  } catch (error) {
    // console.log(error);
    return false;
  } finally {
    if (fileDesscriptor) {
      await fileDesscriptor.close();
    }
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
