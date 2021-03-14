const { Op } = require('sequelize');
const { contasMovimentacao } = require('../models');

module.exports = {
    async contas(req, res) {
        const contas = await contasMovimentacao.findAll({

            order: [['id', 'ASC']]

        });
        return res.json(contas);
    },

    async conta(req, res) {
        const id = req.params.id;
        const conta = await contasMovimentacao.findAll({
            where: { id: id },

            order: [['id', 'ASC']]
        });
        return res.json(conta);
    },

    async register(req, res) {
        const conta = await contasMovimentacao.create(req.body);
        return res.json(conta);
    },

    async update(req, res) {

        const conta = await contasMovimentacao.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(conta);
    },

    async unableAll(req, res) {

        const conta = await contasMovimentacao.update(req.body, {
            where: {
                clienteId: req.body.clienteId,
                status: true
            }
        });
        return res.json(conta);
    },

    async delete(req, res) {
        const conta = await contasMovimentacao.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(conta);
    },

};