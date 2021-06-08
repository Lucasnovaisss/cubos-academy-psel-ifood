function solucao(produtos) { 
  
  let topDeLinha = [];  
    for (let item of produtos) {
        if (item.preco >= 10000) {
            topDeLinha.push(item.preco)
        }
    }
  let totalTopDeLinha = 0;
     for (let i = 0; i < topDeLinha.length; i++) {
         totalTopDeLinha += topDeLinha[i]
     }
  let produtosPreco = [];  
    for (let item of produtos) {
        produtosPreco.push(item.preco)
    }
    let total = 0;
     for (let i = 0; i < produtosPreco.length; i++) {
         total += produtosPreco[i]
     }
        
    const resultado = 
 {
    totalTop: totalTopDeLinha,
    percentual: totalTopDeLinha / total
 }
       console.log(resultado);
     
}
