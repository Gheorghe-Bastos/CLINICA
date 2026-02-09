const { rl, pergunta } = require('../READLINE/Readline');
const { CadastroUsuario, LoginUsuario } = require('../CRUDs/CRUDusuario');
const { TipoUsuario } = require('../Entidades/ENUMs/TipoUsuario');

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
    console.log("\n| 1. Gerenciar Conta \n| 2. Gerenciar Pacientes \n| 3. Gerenciar Profissionais \n| 4. Fazer Logout \n| 5. Sair");
    const escolha = await pergunta("Escolha uma opção (1-5): ");

    switch (escolha) {
        case '1':
            gerenciarContaAdmin(menuAdmin);
            break;

        case '2':
            gerenciarPaciente(menuAdmin);
            break;
        
        case '3':
            gerenciarProfissionaisAdmin(menuAdmin);
            break;

        case '4':
            voltarMenu();
            break;

        case '5':
            console.log("Saindo do sistema.");
            rl.close();
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            menuAdmin(voltarMenu);
    }
}

async function gerenciarContaAdmin(voltarMenuAdmin) {
    console.log("\n\tGerenciamento de Conta do Admin");

    voltarMenuAdmin();
}

async function gerenciarPaciente(voltarMenuAdmin) {
    console.log("\n\tGerenciamento de Paciente");

    voltarMenuAdmin();
}

Menu()

module.exports = {Menu};