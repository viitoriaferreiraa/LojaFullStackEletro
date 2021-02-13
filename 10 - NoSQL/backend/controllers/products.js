const Products = require ('../models/products')

exports.findAll = (req,res) => {
    Products.getAll((erro,results) => {
        if(erro){
            return(erro)
        }
        res.send(results)
    })
}