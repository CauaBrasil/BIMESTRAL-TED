export function iniciarFila(size = 10) {
    return [...new Array(size)] // Retorna uma Array de tamanho determinado, tendo '10' como valor default
}

export function inserirItem(fila, elemento){
    if(fila.indexOf(undefined) === -1){ // Verifica se o primeiro elemento da fila não está vazio
        return 
    }
        
    fila[fila.indexOf(undefined)] = elemento // Adiciona os elementos na fila
}

export function removerItem(fila){
    for(let i = 0; i < fila.length ;i++){ 
        fila[i] = fila[i +1] // Sobrescreve um elemento pelo anterior 
    }
}

export function removerTodosItens(fila){
    for(let i = 0; i < fila.length ;i++){
        fila[i] = undefined // Define todos os elementos da fila 'undefined', logo, ela está vazia
    }
}

export function showFila(fila){ // Print bonito <3
    console.log("-------------- FILA --------------")
    console.log(fila)
    console.log("----------------------------------")
    console.log("\n\n")
}