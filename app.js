const express = require("express"); //se importa express
const app = express(); //execute express
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //paquete que permite recibir datos en formato JSON
const cors = require("cors");
require("dotenv/config"); //se requiere acceso al env package para evitar que se muestre la password

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");

//MIDDLEWARES
app.use("/posts", postsRoute); //siempre que vayamos a posts sigue esta ruta

//ROUTES
app.get("/", (req, res) => {
  //Se crean las rutas
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  //Se crean las rutas
  res.send("We are on posts");
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true }, //removes deprecated message
  () => console.log("Connected to DB!")
);

//How do we start listening to the server
app.listen(3000);
