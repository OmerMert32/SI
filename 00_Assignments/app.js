import express from 'express';
import {FileParser}from 'file:///C:/Users/omerm/SI/02_Data_Files/reader_parser.js'; 


class DataAPI {
  constructor() {
    this.csvData = null;
    this.jsonData = null;
    this.txtData = null;
    this.xmlData = null;
    this.yamlData = null;
    this.app = express();
    this.initRoutes();
  }

  async loadData() {
    try {
      this.csvData = await FileParser.parseCSV('C:/Users/omerm/SI/02_Data_Files/me.csv');
      this.jsonData = await FileParser.parseJSON('C:/Users/omerm/SI/02_Data_Files/me.json');
      this.txtData = await FileParser.parseTXT('C:/Users/omerm/SI/02_Data_Files/me.txt');
      this.xmlData = await FileParser.parseXML('C:/Users/omerm/SI/02_Data_Files/me.xml');
      this.yamlData = await FileParser.parseYAML('C:/Users/omerm/SI/02_Data_Files/me.yaml');
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  initRoutes() {
    this.app.get('/csv', (req, res) => {
      res.json(this.csvData);
    });

    this.app.get('/json', (req, res) => {
      res.json(this.jsonData);
    });

    this.app.get('/txt', (req, res) => {
      res.send(this.txtData);
    });

    this.app.get('/xml', (req, res) => {
      res.json(this.xmlData);
    });

    this.app.get('/yaml', (req, res) => {
      res.json(this.yamlData);
    });
  }

  startServer(port = 3000) {
    this.app.listen(port, () => {
      console.log(`Data API server running on port ${port}`);
    });
  }
}

// Usage
async function startAPI() {
  const dataAPI = new DataAPI();
  await dataAPI.loadData();
  dataAPI.startServer();
}

startAPI();
