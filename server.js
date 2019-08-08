const express = require("express");
const path = require('path')
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'meldejesus',
  host: 'localhost',
  database: 'sequelize_chirpy',
  password: 'root',
  port: 5432,
 
})
 
const app = express();
 
// App Routes - Auth
app.get("/api", (req, res) => {
  pool.query('SELECT * FROM people', (error, results) => {
    if (error) {
      throw error
    }
    console.log(results)
    return res.status(200).json(results.rows)
  })
})
console.log(path.join(__dirname, "/client/public/index.html"))
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});


// App Server Connection
app.listen(process.env.PORT || 3001, () => {
  console.log(`app is running on port ${process.env.PORT || 3001}`);
});