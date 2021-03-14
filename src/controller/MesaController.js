const { Mesa } = require('../models');

module.exports = {
    async mesas(req, res) {
        const mesas = await Mesa.findAll({
            order: [['id', 'ASC']]
        });
        return res.json(mesas);
    },

    async mesa(req, res) {
        const id = req.params.id;
        const mesa = await Mesa.findAll({
            where: { id: id },
            order: [['id', 'ASC']]
        });
        return res.json(mesa);
    },

    async register(req, res) {
        const mesa = await Mesa.create(req.body);
        return res.json(mesa);
    },

    async update(req, res) {

        const mesa = await Mesa.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(mesa);
    },

    async delete(req, res) {
        const mesa = await Mesa.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(mesa);
    }
};