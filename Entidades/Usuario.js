const { Pessoa } = require("./Pessoa");
const {TipoUsuario} = require("./ENUMs/TipoUsuario");

class Usuario extends Pessoa {

    constructor(usuario_id, nome, cpf, usuario_email, senhaHash, usuario_tipo) {

        super(nome, cpf);

        if (!Object.values(TipoUsuario).includes(usuario_tipo)) {

            throw new Error ('Tipo de usuário inválido');
        }

        this.usuario_id = usuario_id;
        this.usuario_email = usuario_email;
        this.senhaHash = senhaHash;
        this.usuario_tipo = usuario_tipo;

    }
}

module.exports = {Usuario};