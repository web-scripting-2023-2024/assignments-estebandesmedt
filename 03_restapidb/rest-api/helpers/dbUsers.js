// dbUsers.js

const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DTBS
});

async function getAllUsers() {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM users');
        connection.release();
        return rows; 
      } catch (error) {
        throw error;
      }
  }

async function getUserById(userId) {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
    connection.release();
    return rows[0]; 
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllUsers, getUserById };
