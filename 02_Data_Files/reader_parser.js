import fs from 'fs';
import csv from 'csv-parser';
import { parseString } from 'xml2js';
import { load } from 'js-yaml';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export class FileParser {
  static async parseCSV(filePath) {
    return new Promise((resolve, reject) => {
      let results = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => results.push(row))
        .on('end', () => {
          resolve(results);
        })
        .on('error', reject);
    });
  }

  static async parseJSON(filePath) {
    try {
      const data = await readFileAsync(filePath);
      return JSON.parse(data);
    } catch (err) {
      throw err;
    }
  }

  static async parseTXT(filePath) {
    try {
      return await readFileAsync(filePath, 'utf8');
    } catch (err) {
      throw err;
    }
  }

  static async parseXML(filePath) {
    try {
      const data = await readFileAsync(filePath);
      return promisify(xml2js.parseString)(data);
    } catch (err) {
      throw err;
    }
  }

  static parseYAML(filePath) {
    try {
      return yaml.load(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      throw e;
    }
  }
}

async function parseFiles() {
  try {
    const csvData = await FileParser.parseCSV('C:/Users/omerm/SI/02_Data_Files/me.csv');
    console.log(csvData);

    const jsonData = await FileParser.parseJSON('C:/Users/omerm/SI/02_Data_Files/me.json');
    console.log(jsonData);

    const txtData = await FileParser.parseTXT('C:/Users/omerm/SI/02_Data_Files/me.txt');
    console.log(txtData);

    const xmlData = await FileParser.parseXML('C:/Users/omerm/SI/02_Data_Files/me.xml');
    console.log(xmlData);

    const yamlData = await FileParser.parseYAML('C:/Users/omerm/SI/02_Data_Files/me.yaml');
    console.log(yamlData);
  } catch (error) {
    console.error(error);
  }
}

