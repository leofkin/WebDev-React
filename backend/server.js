const express = require("express");
const app = express();

//npm install cors -> Permite requisições no servidor
const cors = require("cors") 
app.use(cors());

const Port = 5001;

app.get("/teste",(req,res)=>{
    res.send("Olá Servidor teste Ok")
});

app.get("/sistema",(req,res)=>{
    res.send("Seja Bem-Vindo ao sistema")
});

app.get("/sobre",(req,res)=>{
    res.send("Página Sobre")
})


app.listen(Port, ()=>{
    console.log(`Servidor Rodando http://localhost:${Port}`)
})
