const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const competidores = [];

const addCompetidor = function(nome, time) {
    competidores.push({
        nome,
        time
    });

    return {
        nome,
        time
    };
}

const getCompetidores = function() {
    return competidores;
};

app.get('/competidor', function (req, res) {
    res.json(getCompetidores());
});

app.post('/competidor', function (req, res) {
    res.json(addAluno(req.body.nome, req.body.sala));
});

app.listen(3000);

module.exports = { app, addCompetidor, getCompetidores }