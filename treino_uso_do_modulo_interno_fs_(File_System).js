
//fs ==> tem a ver com modulos nativos internos, mas mesmo assim precisam ser importados.
//require ==> usado para importar modulos.

const fs = require('fs'); //file system
fs.writeFileSync('teste.txt','Aprendendo Node.js!');
console.log('arquivo criado com sucesso!');




// o fs é um modulo interno do node.js, ele significa File Systen e ele permite a interação com o sistema de arquivos.
//o require é usado para carregar modulos, nesse caso está sendo carregado um modulo interno do node.js
