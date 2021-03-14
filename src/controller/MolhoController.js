const { Molho } = require('../models');

module.exports = {
    async molhos(req, res) {
        const molhos = await Molho.findAll();
        return res.json(molhos);
    },

    async molho(req, res) {
        const id = req.params.id;
        const molho = await Molho.findAll({ where: { id: id } });
        return res.json(molho);
    },

    async register(req, res) {
        const molho = await Molho.create(req.body);
        return res.json(molho);
    },

    async update(req, res) {

        const molho = await Molho.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(molho);
    },

    async delete(req, res) {
        const molho = await Molho.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(molho);
    }
};