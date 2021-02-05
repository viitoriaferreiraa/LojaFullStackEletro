import {useSelector} from 'react-redux';
import CartModal from './CartModal';

const CartButton = () => {
  const cartItens = useSelector (state => state.cart.value)
    return(
      <>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#cartModal">
        <span><i className="fas fa-shopping-cart"></i></span>
        <span className="badge rounded-pill bg-info text-dark">{cartItens}</span>
      </button>
      <CartModal/>
      </>
    )
}

export default CartButton;