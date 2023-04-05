const db = require("../utils/database");
const Users = require("../models/users.models");
// const orders = require("../models/order.models");
// const productinOrders = require("../models/productInOrder.models");
const Products = require("../models/product.models");
const productsInCar = require("../models/productInCar.models");
const Car = require("../models/car.models");

const initModels = require("../models/initModels");

initModels();

const users = [
    {
      username: "joseVargas",
      email: "jotik1989@gmail.com",
      emailVerified: true,
      password: "1234567",
      avatar: "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=740",
      rol: "Admin"
    },
    {
      username: "Harvey",
      email: "harvey@academlo.com",
      emailVerified: true,
      password: "1234567",
      avatar: "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=740",
      rol: "Client"
    },
    {
      username: "Noe4271",
      email: "noe@academlo.com",
      emailVerified: true,
      password: "1234567",
      avatar: "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=740",
      rol: "Client"
    },
    {
      username: "Robert",
      email: "jose.roberto@academlo.com",
      emailVerified: true,
      password: "1234567",
      avatar: "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=740",
      rol: "Client"
    },
    {
      username: "Diana",
      email: "diana@academlo.com",
      emailVerified: true,
      password: "1234567",
      avatar: "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=740",
      rol: "Client"
    },
    {
      username: "Cesarin",
      email: "cesar@academlo.com",
      emailVerified: true,
      password: "1234567",
      avatar: "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg?w=740",
      rol: "Client"
    },
  ];
 
  const products = [
    {
        name: "iphone 14 pro max",
        description: "Iphone 14 pro max es el mejor iphone de la marca en la actualidad",
        price:"1500",
        avaliableQty: "10",
        status: "true",
        userId: 2,
        productImage: "https://http2.mlstatic.com/D_NQ_NP_2X_864844-MLM51559388062_092022-F.webp",
    },

    {
        name: "iphone 12 pro max",
        description: "Iphone 14 pro max es el mejor iphone de la marca en la actualidad",
        price:"1000",
        avaliableQty: "15",
        status: "true",
        userId: 3,
        productImage: "https://http2.mlstatic.com/D_NQ_NP_2X_864844-MLM51559388062_092022-F.webp",
    },
    {
        name: "tv samsung t100",
        description: "el mejor tv de la actualidad presente de la marca",
        price:"1000",
        avaliableQty: "5",
        status: "true",
        userId: 4,
        productImage: "https://http2.mlstatic.com/D_NQ_NP_2X_864844-MLM51559388062_092022-F.webp"
    },
    {
        name: "air flyer",
        description: "freidora de aire de 4.5 litros",
        price:"100",
        avaliableQty: "16",
        status: "true",
        userId: 5,
        productImage: "https://http2.mlstatic.com/D_NQ_NP_2X_864844-MLM51559388062_092022-F.webp",
    },
    {
        name: "camara canon t7i",
        description: "camara canon viajera de 35 mpx",
        price:"1800",
        avaliableQty: "3",
        status: "true",
        userId: 6,
        productImage: "https://http2.mlstatic.com/D_NQ_NP_2X_864844-MLM51559388062_092022-F.webp",
    },
  ]

  const car = [
    {
        userId: 2,
        totalPrice: 0.0

    }, 
    {
        userId: 3,
        totalPrice: 0.0

    }, 
    {
        userId: 4,
        totalPrice: 0.0

    }, 
    {
        userId: 5,
        totalPrice: 0.0

    }, 
    {
        userId: 6,
        totalPrice: 0.0

    }, 
  ]
  const productInCar = [
    {
        carId: 1,
        productId: 1,
        quantity:  1,
        price: "1500",
        status: "false"

    },
    {
        carId: 2,
        productId: 2,
        quantity:  1,
        price: "1000",
        status: "false"

    },
    {
        carId: 3,
        productId: 3,
        quantity:  1,
        price: "1000",
        status: "false"

    },
    {
        carId: 4,
        productId: 4,
        quantity:  1,
        price: "100",
        status: "false"

    },
    {
        carId: 5,
        productId: 5,
        quantity:  1,
        price: "1800",
        status: "false"

    },
    
  ]

  db.sync({ force: true }).then(async () => {
    users.forEach((user) => {
      Users.create(user);
    });
    setTimeout(async () => {
        const ProductResult = await Products.bulkCreate(products);
        if (ProductResult) console.log("productos creadas correctamente");
        const carResult = await Car.bulkCreate(car);
        if (carResult) console.log("cars creados satisfactoriamente");
        const productInCarResult = await productsInCar.bulkCreate(productInCar);
        if (productInCarResult) console.log("productinCars creados satisfactoriamente");
      }, 400);


});






