import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';
import Price from './Price'

const CartModal = () =>{
  
    const cartItens = useSelector(state => state.cart.value)
    const produtos = useSelector(state => state.cart.Carts)
    const dispatch = useDispatch();

    let totalPrice = 0;
    for (let i = 0; i < produtos.length; i++) {
        totalPrice += (produtos[i].price * produtos[i].qtd)
    }
  
  return (

  <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="cartModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="CartModalLabel">Meu Carrinho</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body table-responsive">
        <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Produto</th>
                            <th scope="col">Qtd</th>
                            <th scope="col">Preço</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map(produto =>{            
                                return(
                                    <tr key={produto.id_cart}>
                                        <th><button className="badge badge-danger" onClick={()=>dispatch(cartActions.RemoveItem(cartItens, produto))}><i className="fas fa-window-close"></i></button></th>
                                        <th><img className="img-fluid img-thumbnail" src={produto.image} alt={produto.name} width="50px"/></th>
                                        <th><span className="badge badge-pill badge-warning">{produto.qtd}</span></th>
                                        <th>R$ <Price>{produto.price}</Price></th>
                                        <th><button className="badge badge-pill badge-primary" onClick={()=>dispatch(cartActions.AddItem(cartItens, produto))}><i className="fas fa-plus"></i></button></th>
                                        <th><button className="badge badge-pill badge-danger" onClick={()=>dispatch(cartActions.Remove(cartItens, produto))}><i className="fas fa-minus"></i></button></th>
                                        <th>R$ {((produto.qtd)*(produto.price)).toFixed(2)}</th>
                                    </tr>
                                )
                            })}
                            <tr>
                                <th colSpan="2" scope="col">Total</th>
                                <th colSpan="3">{cartItens} itens</th>
                                <th colSpan="2">R$ {totalPrice.toFixed(2)}</th>
                            </tr>
                        </tbody>
                    </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>

    )
}

export default CartModal; 