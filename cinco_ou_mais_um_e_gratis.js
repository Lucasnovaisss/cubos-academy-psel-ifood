function solucao(precos) {
    //seu codigo aqui
   let soma = 0;
    let menorValor = Math.min(...precos)
    let total = 0;
    for (let i = 0; i < precos.length; i++) {
        if (precos.length >= 5) {
            soma = soma + precos[i]
            total = soma - menorValor;
        } else {
        soma = soma + precos[i];
            total = soma;
            
        }
    }
    console.log(total)
}
