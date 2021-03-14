const { Formas_pagamento } = require('../models');

module.exports = {
    async formasPagamentos(req, res) {
        const formas = await Formas_pagamento.findAll({
            order: [['id', 'ASC']]

        });
        return res.json(formas);
    },

    async formaPagamento(req, res) {
        const id = req.params.id;
        const forma = await Formas_pagamento.findAll({
            where: { id: id },
            order: [['id', 'ASC']]
        });
        return res.json(forma);
    },

    async register(req, res) {
        const forma = await Formas_pagamento.create(req.body);
        return res.json(forma);
    },

    async update(req, res) {

        const forma = await Formas_pagamento.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(forma);
    },

    async delete(req, res) {
        const forma = await Formas_pagamento.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(forma);
    }
};