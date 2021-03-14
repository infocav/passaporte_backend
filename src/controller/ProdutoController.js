const { Produto } = require('../models');
const { Op } = require('sequelize');


module.exports = {
    async produtos(req, res) {
        const produtos = await Produto.findAll();
        return res.json(produtos);
    },

    async produtosPDV(req, res) {
        const produtos = await Produto.findAll({
            where: {

                status: {
                    [Op.eq]: true
                }
            },
            order: [['detalhar', 'DESC'], ['nome', 'ASC']]

        });
        return res.json(produtos);
    },

    async produto(req, res) {
        const id = req.params.id;
        const produto = await Produto.findAll({ where: { id: id } });
        return res.json(produto);
    },

    async register(req, res) {
        const produto = await Produto.create(req.body);
        return res.json(produto);
    },
    async bulkregister(req, res) {
        const produto = await Produto.bulkCreate(req.body);
        return res.json(produto);
    },

    async update(req, res) {

        const produto = await Produto.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(produto);
    },

    async delete(req, res) {
        const produto = await Produto.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(produto);
    }
};