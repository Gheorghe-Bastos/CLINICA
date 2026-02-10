const { rl, pergunta } = require('../READLINE/Readline');
const pacientes = require('./Arrays/pacientes');

async function cadastrarPaciente(voltarMenu) {
    console.log("\n\tCadastro de Paciente");

    voltarMenu();
}

async function buscarPaciente(voltarMenu) {
    console.log("\n\tBusca de Paciente");

    voltarMenu();
}

function verPacientes(voltarMenu) {
    console.log("\n\tLista de Pacientes:");

    voltarMenu();
}

module.exports = { cadastrarPaciente, buscarPaciente, verPacientes };