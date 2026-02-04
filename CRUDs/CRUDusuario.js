const { pergunta } = require('../READLINE/Readline');
const usuarios = require('../CRUDs/Arrays/usuarios');
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
    const usuario_tipo = await pergunta("Escolha o tipo de usuário (1-3): ");


    if (usuario_tipo === '1') {
        let usuario_tipo = TipoUsuario.ADMIN;

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
        usuarios[senhaHash] = novoUsuario;

        console.log("Usuário cadastrado com sucesso:");
        console.log(novoUsuario);
        console.log(usuarios);

        Menu();

    } else if (usuario_tipo === '2') {
        let usuario_tipo = TipoUsuario.MEDICO;
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
        usuarios[senhaHash] = novoUsuario;

        console.log("Usuário cadastrado com sucesso:");
        console.log(usuarios);
        console.log(novoUsuario);

        Menu();

    } else if (usuario_tipo === '3') {
        let usuario_tipo = TipoUsuario.FUNCIONARIO;

        novoUsuario = new Usuario(
            Date.now(),
            nome,
            cpf,
            usuario_email,
            senhaHash,
            usuario_tipo
        );
        usuarios[senhaHash] = novoUsuario;

        console.log("Usuário cadastrado com sucesso:");
        console.log(novoUsuario);
        console.log(usuarios);

        Menu();

    } else {
        console.log("Tipo de usuário inválido. Tente novamente.");
        return CadastroUsuario(Menu);
    }
}

function busca(entrada) {
    
    for (const senhaHash in usuarios) {
        let pesquisa = usuarios[senhaHash];

        if (pesquisa.senhaHash == entrada) {
            
            return pesquisa
        }
    }
    return null;
}

async function LoginUsuario(Menu) {
    const entrada = await pergunta("Digite a senha: ");

    const usuarioEncontrado = busca(entrada);
    
    if (!usuarioEncontrado) {
        console.log("Usuário ou senha incorretos.");

    } 
    
    else {
        console.log(`Usuário encontrado:`);
        console.log(usuarioEncontrado);
       
    }
    
    Menu();
}

async function VerUsuario(Menu) {
    console.log("Função de ver usuário chamada");

    const pesquisa = await pergunta("Digite a senha do usuário que deseja ver: ");

    const usuarioEncontrado = busca(pesquisa);

    if (!usuarioEncontrado) {
        console.log("Usuário não encontrado.");
    } else {
        console.log("Usuário encontrado:");
        console.log(usuarioEncontrado);
    }

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