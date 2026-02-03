const { Usuario } = require("./Usuario");
const { TipoUsuario } = require("./ENUMs/TipoUsuario");

class Medico extends Usuario {

    constructor(usuario_id, nome, cpf, usuario_email, 
        senhaHash, crm, especialidade) {
        
        super(usuario_id, nome, cpf, usuario_email, senhaHash, TipoUsuario.MEDICO);
        this.crm = crm;
        this.especialidade = especialidade;

    }
}

module.exports = {Medico};