import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const ProductsPage = () => {

        const [prods, setProds] = useState([]);

        useEffect (async() => {
            const res = await fetch('http://localhost/FullStackEletro/backend/api.php');
            setProds(await res.json())
    }, [])

        const category = prods.map(category =>{
            const container = { };
            container ['id'] = category.id_categoria;
            container ['name'] = category.categoria;
            return container;
        });

        const category_simple = category.map(JSON.stringify).reverse()
        .filter(function(item, index, arr){return arr.indexOf(item,index + 1) === -1;})
        .reverse().map(JSON.parse);
        
        let prod = document.getElementsByClassName('box-item');

        function showProds(event) {
            let item = event.target.id;
            for (let i = 0; i < prod.length; i++) {
                if (item === prod[i].id) {
                        prod[i].style.display = "block";
                }
                    else{
                        prod[i].style.display = "none";
                }
            }
        }
        
        function allProds() {
            for (let i = 0; i < prod.length; i++) {
                prod[i].style.display = "block";
            }
        }
        
        function enter(event) {
            const img = event.target
            img.className = "card-img-top border border-danger";
        }
    
        function out(event) {
            const img = event.target
            img.className = "card-img-top img-thumbnail";
        }


    return(
    <>
        <main className="container">
            <div className="dropdown">
                <button className="btcategoria btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button onClick={allProds} className="dropdown-item list-group-item d-flex justify-content-between align-items-center">Todos Os Produtos</button>
                {   category_simple.map ( category => {
                    return (
                        <>
                        <button onClick={showProds} key={category.id} className="dropdown-item list-group-item d-flex justify-content-between align-items-center"
                                id={category.id} type="button">
                            {category.name} 

                        </button>
                        </>
                    )
                })
            }
                </div>
            </div>
                <div className="row">
                    

{ prods.map(item => {
    return(
        <>
        <div key={item.idproduto} id={item.id_categoria} className="box-item card col-sm-12 col-md-6 col-lg-3">
                    <img onMouseEnter={enter} onMouseLeave={out} src={item.imagem} className="card-img-top img-thumbnail"/>
                    <div className="textoloja card-body">
                    <h5 className="card-title"><strong>{item.descricao}</strong></h5>
                    <p className="card-text text-danger"><strong><s>{item.preco}</s></strong></p>
                    <p className="card-text"><mark className="precofinal"><strong>{item.preco_venda}</strong></mark></p>
                    <Link to="/faleconosco"><button className="botaocompra btn btn-danger">Comprar</button></Link>
                    </div>
                    </div>
        </>
    )
})  
}
        </div>
        </main>
    </> 
    )}

     export default ProductsPage;
