// src/db.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db(dbName);
  } catch (err) {
    console.error('Error connecting to the database', err);
  }
};

module.exports = connectDB;
