function solucao(letra, palavras) {
	//seu codigo aqui
    let perdeu = 0;
    
   for (let item of palavras) {
       if (item[0] !== letra) {
           perdeu++
       }
   }
    console.log(perdeu)
}
