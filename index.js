import { iniciarFila, inserirItem, removerItem, removerTodosItens, showFila } from "./fila.js"; // Importa funções de fila.js

const musicas = [
    'musica1',
    'musica2',
    'musica3',
    'musica4',
    'musica5',
]

const tamanhoFila = musicas.length // Define o tamanho da fila como o tamanho da Array
const fila = iniciarFila(tamanhoFila) // Inicia a fila e a insere em uma variável

showFila(fila) // Exibe a fila

for(let i = 0; i < tamanhoFila; i++){ // Insere um elemento por espaço disponível
    inserirItem(fila, musicas[i]) 
}

showFila(fila)
removerItem(fila) // Remove o primeiro elemento da fila

showFila(fila)

removerTodosItens(fila) // Remove todos os itens da fila

showFila(fila)