import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'; 
import {useState, useEffect} from 'react';

const Contact = () => {

const [msg, setMsg] = useState ([]);

const [render, setRender] = useState (false);

const [alert, setAlert] = useState (false);

useEffect (async() => {
    const res = await fetch('http://localhost/FullStackEletro/backend/mensagem.php');
setMsg(await res.json())
}, [render])

function newMsg(event) {
    event.preventDefault();
    let form = new FormData(event.target);
    const url = "http://localhost/FullStackEletro/backend/enviarmsg.php";
    fetch(url, { 
        method: "POST",
        body: form
    }).then((res) => res.json()).then((data) => 
    {
        setRender(!render);
        setAlert(data)

        setTimeout(() => {
            setAlert(false);
        }, 3000)
    })
    
}

    return(

        <>


    <img className="texto containerPai" src="./img/contato.gif" alt='Contato'/> 
    <main>
    <div  className="container d-flex ">
        <div className="contatos w-25 mt-5">
           <section className=" mb-5 contato" id="contato">
                <div className="grid icons">
                    <a target="_blank" href="https://github.com/viitoriaferreiraa">
                    <i class="fab fa-github-alt"></i>
                    </a>
                    <br/>
                    <a target="_blank" href="https://instagram.com/viitoriaferreiraa">
                    <i class="fab fa-instagram"></i>
                    </a>
                    <br/>
                    <a href="mailto:viihferreiraa74@gmail.com">
                    <i class="fas fa-envelope-open-text"></i>
                    </a>
                </div>
            </section>             
        </div>
        <div className="formContato mt-5 ml-5 mb-5">    
      <form onSubmit={newMsg} className="formGroup">
        <div className="formulario w-75  mb-5 ">
        <h2 className="text">Fale Conosco:</h2>
        <label className="text">Nome:</label>
        <input  type="text" name="nome" placeholder="Seu nome completo"/>
        <br/> <label className="contato">Envie uma mensagem:</label>
        <textarea className="mensagem" type="text" name="msg" placeholder="Eai, qual produto quer comprar?"></textarea>
        </div>
        <button className="help btn btn-outline-dark form-control w-25" name="submit" value="Enviar">Enviar</button>
      </form>
      { alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                    Mensagem enviada!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div> }
     </div>
    </div>
    <section className="container ml-5 mt-5 row justify-content-start ">
    { msg.map(item => {
    return(
        <>
        <div className="col-4">
        <div key={item.id} className="container justify-content-center mx-auto card">
                    <div className="card-body">
                    <h5 className="card-title">{item.nome}</h5>
                    <p className="card-text">{item.msg}</p>
                    </div>
                    </div>
                    </div>
        </>
    )
})  
}
        </section>
    </main>

    

    {/* Consultar tabela?*/}

        </>
    )
}

export default Contact;