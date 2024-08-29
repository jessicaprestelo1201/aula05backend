import express from 'express'
import {config} from 'dotenv'

config()
const serverPort = process.env.PORT || 3000

const app =  express()
app.use(express.json())

const emocoes = [
    {
        id:1,
        nome: "Nojinho",
        cor: "Verde"
 },
 {
 id:2,
 nome: "Ansiedade",
 cor: "Laranja"
},
{
    id:3,
    nome: "Medo",
    cor: "Roxo"
}
]

const personagens = [
{
id: 100,
nome: "Totoro",
vivo: true
},

{
id: 101,
nome: "Edward Cullen",
vivo: false
},

{
    id:102,
    nome: "Jade",
    vivo: true
},

{
    id:103,
    nome:"Mulan",
    vivo:true

}
]

app.get("/",(req,res) => {
    return res.status(200).send( emocoes)
    })

    app.get("/emocoes",(req,res) => {
        return res.status(200).send(emocoes)
        })


app.get("/2tds2",(req,res) => {
    return res.status(404).send({message:"Hello, Word!"})
    })

    app.get("/personagens",(req,res) => {
        return res.status(200).send( personagens )
        })

app.listen(serverPort, () => {
    console.log(`✨ Server started on http://localhost:${serverPort}`)
})