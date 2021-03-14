const { Caixa } = require('../models');
const { Venda } = require('../models');
const { Abertura_fechamento_caixa } = require('../models');
const { Op } = require('sequelize');



module.exports = {
    async caixas(req, res) {
        const caixas = await Caixa.findAll(
            {
                order: [['id', 'ASC']]
            }
        );
        return res.json(caixas);
    },

    async caixa(req, res) {
        const id = req.params.id;
        const caixa = await Caixa.findOne({
            include: {
                model: Abertura_fechamento_caixa,
                required: false,
                where: {
                    id_caixa: {
                        [Op.col]: 'Caixa.id'

                    },
                    data_fechamento: null


                }
            },
            where: { id: id }

        });
        return res.json(caixa);
    },

    async listarFluxo(req, res) {
        const id = req.params.id;
        const vendas = await Venda.findAll({
            where: { id_abertura_caixa: id },
            order: [['id', 'DESC']]
        });
        return res.json(vendas);
    },


    async register(req, res) {
        const caixa = await Caixa.create(req.body);
        return res.json(caixa);
    },

    async update(req, res) {

        const caixa = await Caixa.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(caixa);
    },

    async delete(req, res) {
        const caixa = await Caixa.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(caixa);
    }
};