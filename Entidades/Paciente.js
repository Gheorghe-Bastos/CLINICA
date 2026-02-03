const { Pessoa } = require("./Pessoa");

class Paciente extends Pessoa {
    constructor(nome, cpf, paciente_id, plano_saude) {
        
        super(nome, cpf);
        this.paciente_id = paciente_id;
        this.plano_saude = plano_saude;
    }
}

module.exports = {Paciente};