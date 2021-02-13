const Msg = require ('../models/msg')
exports.create = (req, res) => {
    if (!req.body){
        res.status(400).send({
        mensagem:'Conteúdo não pode ser vazio'
        })
    }
    const msg = new Msg ({
        nome: req.body.nome, 
        msg: req.body.msg
    })
    Msg.create(msg, (erro,result) =>{
        if(erro){
            res.send(result)
        }
        res.send(result)
    })
}

exports.findAll = (req,res) => {
    Msg.getAll((erro,results) => {
        if(erro){
            return(erro)
        }
        res.send(results)
    })
}