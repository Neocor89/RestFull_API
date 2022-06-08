require("dotenv").config();

const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router');

//: Initialisation d'express
app.use(express.json());

//: On défini le router sur "/api/users" + en payload la route
app.use("/api/users", userRouter);

//: Remplacement du port par le nom du fichier .env
app.listen(process.env.APP_PORT, () => {
  console.log("Server is listening on port 3000 on PORT : ", process.env.APP_PORT);
});

//: Endpoint application
// app.get('/api', (req, res) => {
//   res.json({
//     success: 1,
//     message: 'API RUN'
//   });
// });
