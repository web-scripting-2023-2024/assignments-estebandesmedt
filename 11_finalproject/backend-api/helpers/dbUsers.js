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
        const [rows] = await connection.query('SELECT * FROM Bachelor_tests');
        connection.release();
        return rows; 
      } catch (error) {
        throw error;
      }
  }

async function getUserById(userId) {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM Bachelor_tests WHERE id = ?', [userId]);
    connection.release();
    return rows[0]; 
  } catch (error) {
    throw error;
  }
}

async function addUser(userData) {
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query('INSERT INTO Bachelor_tests SET ?', [userData]);
    connection.release();
    return result.insertId;
  } catch (error) {
    throw error;
  }
}

async function updateUser(userId, userData) {
  try {
    if (Object.keys(userData).length === 0) {
      throw new Error('No fields to update');
    }

    const connection = await pool.getConnection();
    const [result] = await connection.query('UPDATE Bachelor_tests SET ? WHERE id = ?', [userData, userId]);
    connection.release();
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
}

async function deleteUser(userId) {
  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query('DELETE FROM Bachelor_tests WHERE id = ?', [userId]);
    connection.release();
    return result.affectedRows; 
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };
