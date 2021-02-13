import React from 'react';

const Stores = () => {
    return(
        <>

    <img className="nossaslojas" src="./img/nossaslojas.gif" alt='Lojas'/> 
    <main className="containerPai d-flex justify-content-center">
    <div className="card ml-5">
            <img className="loja1 card-img-top" src="./img/loja01.jpg" alt="Card image cap"/>
    <div className="card-body">
           <p className="textoloja card-text">           
            <h3><b>Rio de Janeiro</b></h3>
            Avenida Paulista,5000 <br/>
            10°Andar<br />
            Centro<br /> 
            (21)3333-3333<br /> 
            </p>         
    </div>
    </div> 

   <div className="card ml-5">
        <img className="loja2 card-img-top" src="./img/loja02.jpg" alt="Card image cap"/>
        <div className="card-body">
           <p className="textoloja card-text">           
            <h3><b>São Paulo</b></h3>
            Avenida Presidente Vargas,985<br/>
            10°Andar<br />
            Centro<br /> 
            (11)3333-3333<br /> 
            </p>
    </div> 
    </div>          

    <div className="card ml-5">
        <img className="loja3 card-img-top" src="./img/loja03.jpg" alt="Card image cap"/>
        <div className="card-body">
           <p className="textoloja card-text">           
            <h3><b>Santa Catarina</b></h3>
            Avenida Presidente Vargas,5000<br/>
            1°Andar<br />
            Centro<br /> 
            (47)3333-3333<br/> 
     </p> 
     </div>
     </div>
     </main>        

        </>
    )
}

export default Stores; 