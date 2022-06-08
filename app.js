require("dotenv").config();

const express = require('express');
const app = express();

//: Endpoint application
app.get('/api', (req, res) => {
  res.json({
    success: 1,
    message: 'API RUN'
  });
});

//: Remplacement du port par le nom du fichier .env
app.listen(process.env.APP_PORT, () => {
  console.log("Server is listening on port 3000 on PORT : ", process.env.APP_PORT);
});