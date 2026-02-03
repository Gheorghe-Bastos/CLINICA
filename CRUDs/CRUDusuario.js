const { pergunta } = require('../READLINE/Readline');

const { Usuario } = require('../Entidades/Usuario');
const { TipoUsuario } = require('../Entidades/ENUMs/TipoUsuario');
const { Medico } = require('../Entidades/Medico');
const { Admin } = require('../Entidades/Admin');

async function CadastroUsuario(Menu) {

    const nome = await pergunta("Digite o nome: ");
    const cpf = await pergunta("Digite o CPF: ");
    const usuario_email = await pergunta("Digite o email: ");
    const senhaHash = await pergunta("Digite a senha: ");

    console.log("Tipos de usuário:\n1. ADMIN\n2. MEDICO\n3. FUNCIONARIO");
    let usuario_tipo = await pergunta("Escolha o tipo de usuário (1-3): ");


    if (usuario_tipo === '1') {
        usuario_tipo = TipoUsuario.ADMIN;

        const autorizacao_admin = await pergunta("Digite a autorização do admin: ");

        novoUsuario = new Admin(
            Date.now(),
            nome,
            cpf,
            usuario_email,
            senhaHash,
            usuario_tipo,
            autorizacao_admin
        );
        console.log("Usuário cadastrado com sucesso:");
        console.log(novoUsuario);

        Menu();

    } else if (usuario_tipo === '2') {
        usuario_tipo = TipoUsuario.MEDICO;
        const crm = await pergunta("Digite o CRM do médico: ");
        const especialidade = await pergunta("Digite a especialidade do médico: ");

        novoUsuario = new Medico(

            Date.now(),
            nome,
            cpf,
            usuario_email,
            senhaHash,
            usuario_tipo,
            crm,
            especialidade
        );
        console.log("Usuário cadastrado com sucesso:");
        console.log(novoUsuario);

        Menu();

    } else if (usuario_tipo === '3') {
        usuario_tipo = TipoUsuario.FUNCIONARIO;

        novoUsuario = new Usuario(
            Date.now(),
            nome,
            cpf,
            usuario_email,
            senhaHash,
            usuario_tipo
        );
        console.log("Usuário cadastrado com sucesso:");
        console.log(novoUsuario);

        Menu();

    } else {
        console.log("Tipo de usuário inválido. Tente novamente.");
        return CadastroUsuario(Menu);

    }
}

async function LoginUsuario() {
    usuario_email = await pergunta("Digite o email: ");
    senhaHash = await pergunta("Digite a senha: ");

    for (usuario_id in Usuario) {
        pesquisarUsuario = null;

        if (usuario_email && senhaHash === Usuario[usuario_id].usuario_email && Usuario[usuario_id].senhaHash) {
            pesquisarUsuario = Usuario[usuario_id];


        }
        break;
    }
    
    if (!pesquisarUsuario) {
        console.log("Usuário ou senha incorretos.");

        Menu();
    } 
    
    else {
        console.log(`Usuário encontrado: \n\n\t${pesquisarUsuario}`);

        Menu();
    }


}

async function VerUsuario(Menu) {
    console.log("Função de ver usuário chamada");

    Menu();
}

async function AtualizarUsuario(Menu) {
    console.log("Função de atualizar usuário chamada");

    Menu();
}

async function DeletarUsuario(Menu) {
    console.log("Função de deletar usuário chamada");

    Menu();
}



module.exports = { CadastroUsuario, LoginUsuario }