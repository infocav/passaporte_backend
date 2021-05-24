const { contasCliente } = require('../models');
const { Op } = require('sequelize');
const sequelize = require('sequelize');
const { contasMovimentacao } = require('../models');
const { Venda } = require('../models');
const { Cliente } = require('../models/');
const { faturaCliente} = require('../models');
const { movimentacaoFatura } = require('../models');


module.exports = {

    async contas(req, res) {
        const contas = await contasCliente.findAll({
            include: [Cliente, {
                model:faturaCliente,
                required:false,
                where:{
                    data_fechamento: {
                        [Op.is]:null
                    }
                },
                include: [{
                    model: movimentacaoFatura,
                    required: false                   
                }]
            }],
            where: {
                clienteId: {
                    [Op.not]: null
                }
            },
            order: [['id', 'ASC']]
        });
        return res.json(contas);
    },
    // async contas(req, res) {
    //     const contas = await contasCliente.findAll({
    //         include: [Cliente, {
    //             model: contasMovimentacao,
    //             required: false,
    //             include: [{
    //                 model: Venda,

    //             }]
    //         }],
    //         where: {
    //             clienteId: {
    //                 [Op.not]: null
    //             }
    //         },
    //         order: [['id', 'ASC']]
    //     });
    //     return res.json(contas);
    // },

    async teste(req, res) {
        const contas = await contasCliente.findAll({
            // attributes: ['id', [sequelize.fn('sum', sequelize.col('vl_total_desconto')), 'total']],
            include: [{
                model: Cliente,
                attributes: ['id']
            }, {
                model: contasMovimentacao,
                attributes: ['id'],
                required: false,
                include: [{
                    model: Venda,
                    attributes: ['id', 'vl_total_desconto'],

                }]
            }],
            where: {
                clienteId: {
                    [Op.not]: null
                }
            },
            // group: ['contasCliente.id', 'Cliente.id', 'contasMovimentacaos.id'],
            where: {
                id: {
                    [Op.eq]: 24
                }
            },
            order: [['id', 'ASC']],
            // raw: true
        });

        return res.json(contas);
    },

    async conta(req, res) {
        const id = req.params.id;
        const conta = await contasCliente.findAll({
            where: { id: id },
            include: {
                model: contasMovimentacao,
                required: false,
                where: {
                    pagamentoId: {
                        [Op.eq]: null
                    }
                }
            },
            order: [['id', 'ASC']]
        });
        return res.json(conta);
    },

    async movimentacao(req, res) {
        const clienteId = req.params.clienteId;
        const conta = await contasCliente.findAll({
            where: {
                clienteId: clienteId,
                status: {
                    [Op.eq]: true
                },

            },
            include: { 
                // model: contasMovimentacao,
                model: faturaCliente,
                required: false,
                where:{
                    data_fechamento: {
                        [Op.is]:null
                    }
                },
                include: [{
                    model: movimentacaoFatura,
                    required: false                   
                }]
                // include: [{
                //     model: Venda,
                    // through: {
                    //     attributes: ['id', 'vl_total'],
                    // }
                // }]
            },
            order: [['id', 'ASC']]
        });

        console.log(conta);
        return res.json(conta);
    },

    async register(req, res) {
        const conta = await contasCliente.create(req.body);
        return res.json(conta);
    },

    async update(req, res) {

        const conta = await contasCliente.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(conta);
    },

    async unableAll(req, res) {

        const conta = await contasCliente.update(req.body, {
            where: {
                clienteId: req.body.clienteId,
                status: true
            }
        });
        return res.json(conta);
    },

    async updateLimite(req, res) {

        const conta = await contasCliente.update(req.body, {
            where: {
                clienteId: req.body.clienteId,
                status: true
            }
        });
        return res.json(conta);
    },

    async delete(req, res) {
        const conta = await contasCliente.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(conta);
    },

};