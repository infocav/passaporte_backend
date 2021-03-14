const { Adicionais, ItensVendasAdicionai } = require('../models');

module.exports = {
    async adicionais(req, res) {
        const adicionais = await Adicionais.findAll();
        return res.json(adicionais);
    },

    async adicional(req, res) {
        const id = req.params.id;
        const adicional = await Adicionais.findAll({ where: { id: id } });
        return res.json(adicional);
    },

    async register(req, res) {
        const adicional = await Adicionais.create(req.body);
        return res.json(adicional);
    },

    async update(req, res) {

        const adicional = await Adicionais.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(adicional);
    },

    async delete(req, res) {
        const adicional = await Adicionais.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(adicional);
    }
};