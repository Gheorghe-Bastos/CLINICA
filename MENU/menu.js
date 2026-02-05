const { rl, pergunta } = require('../READLINE/Readline');
const { CadastroUsuario, LoginUsuario } = require('../CRUDs/CRUDusuario');

async function Menu() {

    console.log("\n\t=== Menu Principal ===\n");
    console.log("1. Cadastro\n2. Login\n3. Sair");

    const escolha = await pergunta("Escolha uma opção: ");

    switch (escolha) {
        case '1':
            CadastroUsuario(Menu);
            break;
        case '2':
            LoginUsuario(Menu);
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

Menu()

module.exports = {Menu};