const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connect_mongodb = require("./mongoconfig/monogoconfig");
const path = require("path");
const fs = require("fs");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

// DOTENV CONFIG
require("dotenv").config();

// PACKEAGE OPTIONS
var corsOptions = {
  origin: ["http://localhost:3000", "https://localhost:2001"],
  optionsSuccessStatus: 200,
};

// PACKAGE CONFIG WITH EXPRESS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(express.json());

// ROUTER CONFIG
const routesPath = path.join(__dirname, "routes");

const loadRoutes = (routesPath) => {
  fs.readdirSync(routesPath).forEach((file) => {
    const filePath = path.join(routesPath, file);
    const route = require(filePath);
    app.use("/api/v1", route);
  });
};

// LOAD ROUTES DYNAMICLLY
loadRoutes(routesPath);

//
app.get('/',(req,res) => {
    return res.sendFile(path.join(__dirname+'/public/index.html'));
})

// SWAGGER CONFIG
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NEXA SOUND ARTIST API DOCUMENTATION",
      version: "1.0.0",
    },
    servers: [{ url: 'http://localhost:3000/' }], // Change the port to 3000
  },
  apis: ['./routes/artistRouter.js', './routes/publicRouter.js'],
};
    

const swaggerSpec = swaggerJsdoc(swaggerOptions)
app.use('/nexa.sound/apis',swaggerUI.serve, swaggerUI.setup(swaggerSpec))

// MONGODB PLUGIN
connect_mongodb();

// APP EXPORTED
module.exports = app;
