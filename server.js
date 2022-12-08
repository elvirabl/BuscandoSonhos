//import { listen } from "./src/app";
const app = require("./src/app");
const PORT = 3113;

app.listen (PORT, function (err){
    if (err) console.log("Erro na Porta".PORT)
    console.log(`API Buscando Sonhos listen at the door: ${PORT}`)
});