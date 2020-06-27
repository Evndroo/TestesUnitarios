const chai = require('chai');
const http = require('chai-http'); 
const subSet = require('chai-subset');

const index = require('../src/index'); 

chai.use(http);
chai.use(subSet);

const CompetidorSchema = {
    nome: nome => nome,
    time: time => time
};

describe('Teste de Rotas', () => {

    it('adicionarCompetidor', () => {
        const competidor = index.addCompetidor('Matheus', 'Time 1');

        chai.expect(competidor).to.containSubset(CompetidorSchema);
    });

    it('Buscar competidor', () => {

        index.addCompetidor('Marina', 'Time 1');
        index.addCompetidor('José', 'Time 2');
        index.addCompetidor('Marli', 'Time 2');
        index.addCompetidor('Sidney', 'Time 3');
        index.addCompetidor('Diego', 'Time 3');
        const competidores = index.getCompetidores();
        
        chai.expect(competidores.length).to.be.equals(6);

        chai.expect(competidores).to.containSubset([CompetidorSchema]);
    });
});