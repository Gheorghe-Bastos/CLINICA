const { rl, pergunta } = require('../READLINE/Readline');
const pacientes = require('./Arrays/pacientes');


async function gerenciarPaciente(voltarMenu) {
    console.log("\n\tGerenciamento de Paciente");

    voltarMenu();
}

async function cadastrarPaciente() {
    console.log("\n\tCadastro de Paciente");
}

async function verPaciente() {
    console.log("\n\tVerificação de Paciente");
}

async function atualizarPaciente() {
    console.log("\n\tAtualização de Paciente");
}

module.exports = { gerenciarPaciente, cadastrarPaciente, verPaciente, atualizarPaciente };