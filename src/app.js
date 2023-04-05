const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json")
const db = require("./utils/database");
const errorHandlerRouter = require("./routes/errorHandler.routes");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");
const productInCarRoutes = require("./routes/PproductInCar.routes");
const orderRoutes = require("./routes/orden.routes");



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

db.sync({ force: false  }) // alterar los atributos
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));

  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
   app.use(userRoutes);
  app.use(productRoutes);
  app.use(authRoutes);
  app.use(productInCarRoutes);
  app.use(orderRoutes); 
  
  app.get("/", (req, res, next) => {
    res.send("welcome to my API");
  });

  errorHandlerRouter(app);


  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });

