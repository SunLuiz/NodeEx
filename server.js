const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");
//inicia o app
const app = express();
app.use(express.json());
app.use(cors());

//inicia o banco
mongoose.connect('mongodb://localhost:27017/noderocket',
{useNewUrlParser:true});
requireDir("./src/models");


//rotas
app.use("/api", require("./src/routes"));

app.listen(3001);