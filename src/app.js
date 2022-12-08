require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnet");
const memberRoute = require("./routes/memberRoute");
const ancestorRoute = require("./routes/ancestorRoute");
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/buscandosonhos/members", memberRoute);

app.use("/buscandosonhos/ancestor", ancestorRoute);

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app