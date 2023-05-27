const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const produtos = require("./src/produtos/produtos.json")
//pegar porta da plataforma do heroku


app.get("/produtos", (rec,res) => {
    return res.json(produtos)
})
app.listen(port, () =>{
    console.log("Servidor está rodando...")
})