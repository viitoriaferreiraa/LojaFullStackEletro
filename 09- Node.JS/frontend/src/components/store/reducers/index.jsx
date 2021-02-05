import { combineReducers} from 'redux';

import cart from './cart';
import produtos from './produto'

export default combineReducers({
    cart, 
    produtos
})