const Db = require ('../config/database')

const Products = function(product){
    return this;
}
Products.getAll = results => {
    const sql = "SELECT * FROM produto JOIN categorias ON produto.fk_idcategoria = categorias.id_categoria"
    Db.query(sql, (erro, res)=>{
        if (erro){
            return erro
        }
        console.log('Produtos: ', res);
        results(null,res)
    }) 
}
module.exports = Products;