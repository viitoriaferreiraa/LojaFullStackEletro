const CartModal = () =>{
    return (

  <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="cartModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="cartModalLabel">Seus Produtos</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Total:
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
          <button type="button" className="btn btn-primary">Salvar alterações</button>
        </div>
      </div>
    </div>
  </div>

    )
}

export default CartModal; 