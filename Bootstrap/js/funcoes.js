function exibir_categoria(categorias){
    let elementos = document.getElementsByClassName('boxProduto');
    console.log(elementos);
    for(let i=0; i<elementos.length;i++){
    console.log(elementos[i].id);
      if(categorias == elementos[i].id)
        elementos[i].style = 'display:inline-block';
        else{
            elementos[i].style = 'display: none';                     

        }
    }
}

let exibir_todos = ()=> {    
        let elementos = document.getElementsByClassName('boxProduto');
        for(let i=0; i<elementos.length;i++){         
            elementos[i].style = 'display:inline-block';        
        }    
};

let destaque = (imagem) =>{
    if(imagem.width == 150)
        imagem.style = 'width:200px';
    else
      imagem.style = 'width:150px';
      
}