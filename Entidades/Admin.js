const { Usuario } = require('./Usuario');
const { TipoUsuario } = require('./ENUMs/TipoUsuario');

class Admin extends Usuario {

    constructor(usuario_id, nome, cpf, usuario_email, usuario_senha, autorizacao_admin) {
        super(usuario_id, nome, cpf, usuario_email, 
            usuario_senha, TipoUsuario.ADMIN);
        
        this.autorizacao_admin = autorizacao_admin;
    }
}

module.exports = { Admin };