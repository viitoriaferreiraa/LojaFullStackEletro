import './Jumbotron.css';
import logoJumb from './img/fotojumbo.png';

export default function Jumbotron (){
    return(
        <div className="jumbo jumbotron jumbotron-fluid mt-4">
            <div className="container d-flex">
              <img src={logoJumb} style={{width:"15%"}}/>
                <div className="container text-center">
                    <br/>
                    <h1 className="text-danger">Sempre bom ver você por aqui!</h1>
                <p className="lead text-danger"><strong>Não gostaria de entrar e tomar<strong> uma xícara de café? </strong></strong></p>
                </div>
            </div>
        </div>
    );
}