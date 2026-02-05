const { rl, pergunta } = require('../READLINE/Readline');
const usuarios = require('../CRUDs/Arrays/usuarios');
const { Usuario } = require('../Entidades/Usuario');
const { TipoUsuario } = require('../Entidades/ENUMs/TipoUsuario');
const { Medico } = require('../Entidades/Medico');
const { Admin } = require('../Entidades/Admin');
const { gerenciarPaciente } = require('./CRUDpaciente');

async function CadastroUsuario(voltarMenu) {

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

        voltarMenu();

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

        voltarMenu();

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

        voltarMenu();

    } else {
        console.log("Tipo de usuário inválido. Tente novamente.");
        return CadastroUsuario(voltarMenu);
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

async function LoginUsuario(voltarMenu) {
    const entrada = await pergunta("Digite a senha: ");

    const usuarioEncontrado = busca(entrada);
    
    if (!usuarioEncontrado) {
        console.log("Usuário ou senha incorretos.");
        voltarMenu();
    } 
    
    else {
        console.log(`Usuário encontrado:`);
        console.log(usuarioEncontrado);  
    }

    if (usuarioEncontrado.usuario_tipo === TipoUsuario.ADMIN) {
        
        menuAdmin(voltarMenu);
    } 
    
    else if (usuarioEncontrado.usuario_tipo === TipoUsuario.MEDICO) {
        console.log("Menu do MÉDICO");
    
        menuMedico();
    } 
    
    else if (usuarioEncontrado.usuario_tipo === TipoUsuario.FUNCIONARIO) {
        console.log("Menu do FUNCIONÁRIO");
        
        menuFuncionario();
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

    
async function VerUsuario(voltarMenu) {
    console.log("Função de ver usuário chamada");

    const pesquisa = await pergunta("Digite a senha do usuário que deseja ver: ");

    const usuarioEncontrado = busca(pesquisa);

    if (!usuarioEncontrado) {
        console.log("Usuário não encontrado.");
    } else {
        console.log("Usuário encontrado:");
        console.log(usuarioEncontrado);
    }

    voltarMenu();
}

async function AtualizarUsuario(voltarMenu) {
    console.log("Função de atualizar usuário chamada");

    voltarMenu();
}

async function DeletarUsuario(voltarMenu) {
    console.log("Função de deletar usuário chamada");

    voltarMenu();
}



module.exports = { CadastroUsuario, LoginUsuario, menuAdmin }