import mysql from 'mysql2/promise';


const { MYSQL_PORT, MYSQL_USER, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

const connection = await mysql.createConnection({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
});


async function sendQuery (query, values) {
  const [results] = await connection.query(query, values);

  return results;
}

export { connection, sendQuery };
