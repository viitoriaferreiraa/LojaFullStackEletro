import produto from './produtos';

const INITIAL_STATE = {
    value:0,
    produto: produto,
    Carts: [],
    produtos_cart: []
}

export default function cart(state = INITIAL_STATE , action){
    switch (action.type){
        case 'ADD_TO_CART': 
        if(state.value===0){
            let cart = {
                id: action.produto.idproduto,
                name: action.produto.descricao,
                price: action.produto.preco_venda,
                image: action.produto.imagem,
                qtd: 1
            }
        state.Carts.push(cart)
        }
        else{
            let check = false;
            state.Carts.map((item, key) => {
                if(item.id === action.produto.idproduto){
                    state.Carts[key].qtd++;
                    check = true;
                }
            });
        if (!check){
            let cart = {
                id: action.produto.idproduto,
                name: action.produto.descricao,
                price: action.produto.preco_venda,
                image: action.produto.imagem,
                qtd: 1
            }
        state.Carts.push(cart)
        }
    }

        return {...state, value: action.cartItens +1}
           
        case 'REMOVE_CART':
            if(action.produto.qtd > 1) {
                action.produto.qtd--;
                return {... state, value: (action.cartItens -1)}
            } else {
                return state;
            }

        case 'ADD_ITEM':
            action.produto.qtd++;
            return {... state, value:(action.cartItens + 1)}
        case 'DELETE_ITEM':
            return{
                ...state,
                value:(action.cartItens - action.produto.qtd),
                Carts: state.Carts.filter(item => {
                    return item.id !== action.produto.id
                })
            }
        default:
            return state
    }
}