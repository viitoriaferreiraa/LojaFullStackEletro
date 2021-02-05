const Add = (cartItens, produto) => {
    return{
      type: 'ADD_TO_CART', 
      cartItens,
      produto
    }
}

const Remove = (cartItens, produto) => {
  return{
    type: 'REMOVE_CART', 
    cartItens,
    produto
  }
}

const AddItem = (cartItens, produto) => {
  return{
    type: 'ADD_ITEM', 
    cartItens,
    produto
  }
}

const RemoveItem = (cartItens, produto) => {
  return{
    type: 'DELETE_ITEM', 
    cartItens,
    produto
  }
}

export default {
    Add,
    Remove,
    AddItem,
    RemoveItem
}