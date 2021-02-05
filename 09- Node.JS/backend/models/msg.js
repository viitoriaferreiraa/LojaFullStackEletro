const Db = require ('../config/database')
const Msg = function (msg){
    this.nome = msg.nome; 
    this.msg = msg.msg;
}

Msg.getAll = results => {
    const sql = "SELECT * FROM comentarios"
    Db.query(sql, (erro, res)=>{
        if (erro){
            return erro
        }
        console.log('Mensagens: ', res);
        results(null,res)
    }) 
}

Msg.create = (newMsg, result) => {
    const sql = "INSERT INTO comentarios SET ?"
    Db.query(sql, newMsg, (erro, res)=>{
        if (erro){
            result(true,{
                erro:'Mensagem não enviada'
            })
        }
        console.log('Mensagem enviada: ');
        result(null, {
            id: res.insertId, ... newMsg
        })
    }) 
}

module.exports = Msg