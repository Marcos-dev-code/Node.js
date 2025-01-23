//a condição será a seguinte se eu sair trabalhar de manha, tarde e noite eu recebo 100 reais ganhos por dia 
//se eu trabalhar só de manha e tarde ou de tarde noite recebo 70 reais
//se eu trabalhar só de manha ou só de tarde ou só de noite eu tiro 40 reais
//se eu não trabalhar, eu não ganho nada e preciso gastar.

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Qual é o seu nome?",(nome)=>{
    console.log(`Olá, ${nome}!`);
    rl.close();
})

