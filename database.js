import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'users'
}).promise()

const result = await pool.query("SELECT * FROM users")
console.log(result)

const notes = away get();

console.log(notes) 
