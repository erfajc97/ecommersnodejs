const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const errorHandlerRouter = require("./routes/errorHandler.routes");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/user.routes");


initModels();


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
.then(()=>{
    console.log("base de datos conectada");
})
.catch((error)=>console.log(error))

db.sync({ force: true }) // alterar los atributos
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));

  app.use(userRoutes);


  app.get("/", (req, res, next) => {
    res.send("welcome to my API");
  });

  errorHandlerRouter(app);


  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });

