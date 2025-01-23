/*Callbacks são funções que são passadas como argumento para outras funções e são executadas após
a conclusão de uma operação assinclona. Em Node.js, Callbacks são frequentemente usados para lidar
com operações de E/S (entrada e saída) não blocantes como leitura de arquivos, requisições HTTP, etc.
*/

// Importa o módulo 'fs' que permite interagir com o sistema de arquivos.

const fs = require('fs');

//Função de callback que será chamada depois da leitura do arquivo.
function readFileCallback(err,data){
    //verifica se ocorreu um erro durante a leitura.
    if (err){
        //Exibe o erro no console.
        console.log('Erro ao ler o arquivo', err);
        return;
    }

    //Se não houver erro exibe o conteúdo do arquivo no console.
    console.log('Conteúdo do arquivo',data);
}

//Função que lê o arquivo 'exemple.txt' de forma assincrona.
//O Terceiro argumento  é a função de callback 'readFileCallback.

fs.readFile('pasta raiz(example.txt)', 'utf8', readFileCallback);

/*Este comentario é meu : a função callback só será executada quando for chamada como argumento da
função readFile, mesmo ela estando sendo declarada antes da função. Isso ocorre por que se ela 
fosse declarada depois da função chamar ela no argumento, O retorno seria "referencialError". No
javascript as funções quando chamadas tem que ter sido antecipadamente declaradas!*/