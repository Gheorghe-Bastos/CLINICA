const { rl, pergunta } = require('../READLINE/Readline');
const { CadastroUsuario, LoginUsuario } = require('../CRUDs/CRUDusuario');
const { TipoUsuario } = require('../Entidades/ENUMs/TipoUsuario');
const { cadastrarPaciente, buscarPaciente, verPacientes } = require('../CRUDs/CRUDpaciente');

async function Menu() {

    console.log("\n\t=== Menu Principal ===\n");
    console.log("1. Cadastro\n2. Login\n3. Sair");

    const escolha = await pergunta("Escolha uma opção: ");

    switch (escolha) {
        case '1':
            CadastroUsuario(Menu);
            break;

        case '2':
            const usuarioLogado = await LoginUsuario();

            switch (usuarioLogado.usuario_tipo) {
                case TipoUsuario.ADMIN:
                    menuAdmin(Menu);
                    break;
                
                case TipoUsuario.MEDICO:
                    menuMedico(Menu);
                    break;

                case TipoUsuario.FUNCIONARIO:
                    menuFuncionario(Menu);
                    break;

            }
            break;

        case '3':
            console.log("Saindo...");
            rl.close();
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            Menu();
            break;
    }
}

async function menuAdmin(voltarMenu) {
    console.log("\n\tMenu do ADMIN");
    console.log("\n| 1. Gerenciar Conta \n| 2. Gerenciar Pacientes \n| 3. Gerenciar Profissionais",
         "\n| 4. gerenciar Agendas \n| 5. Voltar \n| 6. Sair");
    const escolha = await pergunta("Escolha uma opção (1-6): ");

    switch (escolha) {
        case '1':
            gerenciarContaAdmin(menuAdmin);
            break;

        case '2':
            gerenciarPaciente(menuAdmin);
            break;
        
        case '3':
            gerenciarProfissionalAdmin(menuAdmin);
            break;

        case '4':
            gerenciarAgendasAdmin(menuAdmin);
            break;

        case '5':
            voltarMenu();
            break;

        case '6':
            console.log("Saindo do sistema.");
            rl.close();
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            menuAdmin(voltarMenu);
    }
}

async function gerenciarContaAdmin(voltarMenu) {
    console.log("\n\tGerenciamento de Conta do Admin");

    voltarMenu();
}

async function gerenciarPaciente(voltarMenu) {
    console.log("\n\tGerenciamento de Paciente");

    console.log("1. Cadastrar Paciente \n2. buscar Paciente \n3. Ver Pacientes \n4. Voltar");
    const escolha = await pergunta("Escolha uma opção (1-4): ");

    switch (escolha) {

        case '1':
            cadastrarPaciente(gerenciarPaciente);
            break;
        case '2':
            buscarPaciente(gerenciarPaciente);
            break;
        case '3':
            verPacientes(gerenciarPaciente);
            break;
        case '4':
            voltarMenu();
            break;
    }
}

async function gerenciarProfissionalAdmin(voltarMenuAdmin) {

    console.log("\n\tGerenciamento de Profissionais do Admin");

    voltarMenuAdmin();
}

async function gerenciarAgendasAdmin(voltarMenu) {

    console.log("\n\tGerenciamento de Agendas do Admin");

    voltarMenu();
}

Menu()

module.exports = {Menu};