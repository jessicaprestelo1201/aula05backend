import express from 'express'
import {config} from 'dotenv'

config()
const serverPort = process.env.PORT || 3000

const app =  express()
app.use(express.json())



app.get("/",(req,res) => {
    return res.status(200).send( emocoes)
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