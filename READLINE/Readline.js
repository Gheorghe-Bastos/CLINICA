const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pergunta(texto) {
    return new Promise((resolve => rl.question(texto, resolve)));
}

module.exports = { pergunta };