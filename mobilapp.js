function solucao(tempo, distancia) {
	//seu codigo aqui
    
    if (tempo <= 5) {
        console.log(600)
    } else if (tempo > 5 && tempo < 60) {
        let conta1 = 100 * tempo;
        let conta2 = 50 * distancia;
        console.log(conta1 += conta2)
    } else if(tempo >60 && distancia >= 100) {
        console.log(150 * distancia)
    } else {
        console.log(200 * distancia)
    }

}
