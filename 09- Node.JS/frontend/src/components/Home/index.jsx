import React from 'react';
import Foto1 from './img/cozinha01.jpg';
import Foto2 from './img/maquina01.jpg';
import Foto3 from './img/cozinha04.jpg';
import Foto4 from './img/cozinha02.jpg';

const Home = () => {
    return(
    <>

 <main className="container-flouid w-100 ">
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
  </ol>

    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={Foto1} className="d-block w-100 img-fluid" alt="Cozinha bonita"/>
        <div className="carousel-caption d-none d-md-block">
        <h1 className="text text-white ">Seja Bem Vindx!</h1>
        <h3 className="text text-white ">Aqui em nossa loja, <em> programadores tem desconto </em> nos produtos para sua casa!</h3>
        </div>
    </div>

    <div className="carousel-item">
        <img src={Foto2} className="d-block w-100 img-fluid" alt="Máquina de lavar bonita"/>
        <div className="carousel-caption d-none d-md-block">
        <h1 className="text text-white">Aqui a sua casa ganha vida,</h1>
        <h3 className="text text-white">SÓ HOJE! máquina de lavar com 50% de Desconto!</h3>
        </div>
    </div>

    <div className="carousel-item">
        <img src={Foto3} className="d-block w-100 img-fluid" alt="Cozinha bonita"/>
        <div className="carousel-caption d-none d-md-block">
        <h1 className="text text-white">Deixe a sua casa com seu estilo,</h1>
        <h3 className="text text-white"> Full Stack Eletro, da nossa casa pra sua casa!</h3>
    </div>
    </div> 

    <div className="carousel-item">
            <img src={Foto4} className="foto4 d-block w-100 img-fluid" alt="Cozinha bonita"/>
            <div className="carousel-caption d-none d-md-block">
            <h1 className="text text-white">Faça-nos uma visita,</h1>
            <h3 className="text text-white">Você vai se surpreender!</h3>
         </div>
       </div>
    </div>

    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  
  </div> 
  </main> 
  
    </>


    )
}

export default Home; 