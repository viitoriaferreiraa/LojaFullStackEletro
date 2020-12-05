import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
    return (
        <>

        <div className="container-flouid ">
            <nav className=" container-flouid navbar navbar-expand-lg navbar-light bg-danger">
            <Link className="navbar-brand nav-link" to="index.php">
            <img className="logo w-20" src="./img/logo01.gif" alt="Logo Full Stack Eletro"/> </Link>
            <Link className="nav-link text-white" to="/">Home Page</Link>
            <Link className="nav-link text-white" to="/nossaslojas">Nossas Lojas</Link>
            <Link className="nav-link text-white" to="/produtos">Nossos Produtos</Link>
            <Link className="nav-link text-white" to="/faleconosco">Fale Conosco</Link>
            <button className="navbar-toggler" type="buttom"data-toggle="collapse"data-target="#navbarSite"><spam className="navbar-toggler-icon"></spam></button> 
        <div className="collapse navbar-collapse"id="navbarSite">    
     </div>
     
      <form className="form-inline form-secondary">
        <input className="form-control mr-2" type="search" placeholder="Buscar..."/>
        <button className="btn btn-outline-dark" type="submit">ok</button>
      </form>
        </nav>  
    </div>  

        </> 
    )
}

export default Header;