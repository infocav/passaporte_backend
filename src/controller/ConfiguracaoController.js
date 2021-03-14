const { configuracao } = require('../models');

const { Caixa } = require('../models');


module.exports = {
    async configuracaos(req, res) {
        const conf = await configuracao.findAll(
            {
                order: [['id', 'ASC']]
            }
        );
        return res.json(conf);
    },

    async configuracao(req, res) {
        const id = req.params.id;
        const conf = await configuracao.findOne({ where: { id: id } });
        return res.json(conf);
    },


    async register(req, res) {
        const conf = await configuracao.create(req.body);
        return res.json(conf);
    },

    async update(req, res) {

        const configuracaosCheck = await configuracao.findAll();
        let conf = {};

        if (configuracaosCheck.length === 0) {
            // console.log("NÃO EXISTE CONFIGURAÇÃO, CRIANDO...", configuracaosCheck);
            conf = await configuracao.create(req.body);

        } else {
            // console.log("EXISTE CONFIGURAÇÃO, UPDATE...", configuracaosCheck);

            conf = await configuracao.update(req.body, {
                where: {
                    id: req.body.id
                }
            });
        }

        return res.json(conf);
    },

    async delete(req, res) {
        const configuracao = await configuracao.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(configuracao);
    }
};