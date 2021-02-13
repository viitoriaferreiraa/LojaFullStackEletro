const Add = (cartItens, produto) => {
    return{
      type: 'ADD_ITEM', 
      cartItens,
      produto
    }
}

const Remove = () => {
    return{
      type: 'REMOVE_ITEM',  
    }
}

export default {
    Add,
    Remove
}