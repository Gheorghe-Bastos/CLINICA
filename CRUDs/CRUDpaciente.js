const { rl, pergunta } = require('../READLINE/Readline');
const pacientes = require('./Arrays/pacientes');

async function cadastrarPaciente() {
    console.log("\n\tCadastro de Paciente");
}

async function verPaciente() {
    console.log("\n\tVerificação de Paciente");
}

async function atualizarPaciente() {
    console.log("\n\tAtualização de Paciente");
}

module.exports = { cadastrarPaciente, verPaciente, atualizarPaciente };