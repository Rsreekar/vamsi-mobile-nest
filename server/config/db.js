import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool = null;

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'vamsi_mobile_nest',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

try {
  pool = mysql.createPool(dbConfig);
  // Test connection
  pool.getConnection()
    .then(conn => {
      console.log('✅ Connected to MySQL Database:', process.env.DB_NAME || 'vamsi_mobile_nest');
      conn.release();
    })
    .catch(err => {
      console.log('ℹ️ MySQL not reachable locally. Running Express API server in zero-config dev mode.');
    });
} catch (error) {
  console.log('ℹ️ Running Express API server in zero-config dev mode.');
}

export const query = async (sql, params = []) => {
  if (pool) {
    try {
      const [results] = await pool.execute(sql, params);
      return results;
    } catch (err) {
      console.error('MySQL Query Error:', err.message);
      throw err;
    }
  }
  return null;
};

export default pool;
