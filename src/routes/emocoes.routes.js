import { Router } from "express";

let emocoesRoutes = Router() 


let emocoes = [
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

emocoesRoutes.get("/",(req,res) => {
    return res.status(200).send(emocoes)
    })


    emocoesRoutes.post("/",(req,res) => {
        const { nome,cor } = req.body
        
        const novaEmocao = {
            id:emocoes.length + 1,
            nome: nome,
            cor: cor
        }

        emocoes.push(novaEmocao)
        return res.status(201).send( novaEmocao )
        });

        export default emocoesRoutes

