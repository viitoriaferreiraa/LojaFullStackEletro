import {useSelector} from 'react-redux';
import CartModal from './CartModal';

const CartButton = () => {
  const cartItens = useSelector (state => state.cart.value)
    return(
      <>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#cartModal">
        Cart {cartItens}
      </button>
      <CartModal/>
      </>
    )
}

export default CartButton;