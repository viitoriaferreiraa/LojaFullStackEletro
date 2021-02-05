import produto from './produtos';

const INITIAL_STATE = {
    value:0,
    produto: produto,
    Carts: [],
    produtos_cart: []
}

export default function cart(state = INITIAL_STATE , action){
    switch (action.type){
        case 'ADD_ITEM': 
        if(state.value===0){
            let cart = {
                id: action.produto.idproduto,
                name: action.produto.descricao,
                price: action.produto.preco_venda,
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
                qtd: 1
            }
        state.Carts.push(cart)
        }
    }

        return {...state, value: action.cartItens +1}
           
        case 'REMOVE_ITEM':
            return state;
    }
    return state;
}