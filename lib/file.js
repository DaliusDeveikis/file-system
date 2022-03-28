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
 *  Async function will create file in to data sub folder and write content.
 * @param {string} dir Create data sub folder.
 * @param {string} fileName Full file name with file extension.
 * @param {object} content Write content (Object).
 * @param {string} content.name User name.
 * @returns {Promise<boolean} Status if created file.
 */

file.create = async (dir, fileName, content) => {
  let fileDesscriptor = null;

  try {
    const filePath = file.fullPath(dir, fileName);
    fileDesscriptor = await fs.open(filePath, 'wx');
    let text = JSON.stringify(content);
    await fs.writeFile(fileDesscriptor, text);
    return [false, 'OK'];
  } catch (error) {
    return [true, error];
  } finally {
    if (fileDesscriptor) {
      await fileDesscriptor.close();
    }
  }
};

/**
 * Reading and return **text** file.
 * @param {string} dir Create data sub folder.
 * @param {string} fileName Full file name with file extension.
 * @returns {[boolean,string]} Status if readed file.
 */

file.read = async (dir, fileName) => {
  const filePath = file.fullPath(dir, fileName);
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return [false, fileContent];
  } catch (error) {
    return [true, error];
  }
};

file.update = (dir, fileName, content) => {
  console.log('Atnaujinamas failas....');
};

file.delete = (dir, fileName) => {
  console.log('Trinamas failas....');
};
