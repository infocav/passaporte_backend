const { Venda } = require('../models');
const { itensVenda } = require('../models');
const { Produto } = require('../models');
const { Molho } = require('../models');
const { itensVendasAdicionai } = require('../models');
const { Adicionais } = require('../models');
const { Formas_pagamento } = require('../models');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { contasMovimentacao } = require('../models');
const { Cliente } = require('../models');

module.exports = {
    async vendas(req, res) {
        const vendas = await Venda.findAll({
            include: [Cliente, {
                model: itensVenda,
                include: [Produto, Molho,
                    {
                        model: itensVendasAdicionai,
                        required: false,
                        where: {
                            itemSeq: {
                                [Op.col]: 'itensVendas.itemSeq'
                            },
                            itemId: {
                                [Op.col]: 'itensVendas.itemId'
                            }
                        },
                        include: [Adicionais]

                    }]
            }],
            order: [['id', 'ASC']]

        });
        return res.json(vendas);
    },

    async listarFluxo(req, res) {
        const id = req.params.id;

        const vendas = await Venda.findAll({
            include: [Formas_pagamento, {
                model: Cliente,
                required: false,
            }, {
                model: itensVenda,
                include: [Produto, Molho,
                    {
                        model: itensVendasAdicionai,
                        required: false,
                        where: {
                            itemSeq: {
                                [Op.col]: 'itensVendas.itemSeq'
                            },
                            itemId: {
                                [Op.col]: 'itensVendas.itemId'
                            }
                        },
                        include: [Adicionais]
                    }]
            }],
            where: {
                id_abertura_caixa: id,
                // id_forma_pagamento: {
                //     [!Op.eq]: null
                // },
            },
            order: [['id', 'DESC']]

        });
        return res.json(vendas);


    },

    async listarPedidosIncompletos(req, res) {
        const id = req.params.id;

        const vendas = await Venda.findAll({
            include: [Formas_pagamento, {

                model: itensVenda,
                include: [Produto, Molho,
                    {
                        model: itensVendasAdicionai,
                        required: false,
                        where: {
                            itemSeq: {
                                [Op.col]: 'itensVendas.itemSeq'
                            },
                            itemId: {
                                [Op.col]: 'itensVendas.itemId'
                            }
                        },
                        include: [Adicionais]

                    }]
            }],
            where: {
                id_abertura_caixa: id,
                status: {
                    [Op.eq]: "1"
                },
                [Op.or]: [
                    {
                        destino_venda: {
                            [Op.eq]: null
                        }
                    },
                    {
                        id_forma_pagamento: {
                            [Op.eq]: null
                        }

                    }
                ]
            },
            order: [['id', 'DESC']]

        });
        return res.json(vendas);
    },

    async listarMesasAbertas(req, res) {
        const id = req.params.id;

        const vendas = await Venda.findAll({
            include: [Formas_pagamento, {

                model: itensVenda,
                include: [Produto, Molho,
                    {
                        model: itensVendasAdicionai,
                        required: false,
                        where: {
                            itemSeq: {
                                [Op.col]: 'itensVendas.itemSeq'
                            },
                            itemId: {
                                [Op.col]: 'itensVendas.itemId'
                            }
                        },
                        include: [Adicionais]

                    }]
            }],
            where: {
                id_abertura_caixa: id,
                status: {
                    [Op.eq]: "1"
                },
                destino_venda: {
                    [Op.eq]: "MESAS"
                }
            },
            order: [['id', 'DESC']]

        });
        return res.json(vendas);
    },


    async listarViajemAbertas(req, res) {
        const id = req.params.id;

        const vendas = await Venda.findAll({
            include: [Formas_pagamento, {

                model: itensVenda,
                include: [Produto, Molho,
                    {
                        model: itensVendasAdicionai,
                        required: false,
                        where: {
                            itemSeq: {
                                [Op.col]: 'itensVendas.itemSeq'
                            },
                            itemId: {
                                [Op.col]: 'itensVendas.itemId'
                            }
                        },
                        include: [Adicionais]

                    }]
            }],
            where: {
                id_abertura_caixa: id,
                status: {
                    [Op.eq]: "1"
                },
                destino_venda: {
                    [Op.eq]: "VIAJEM"
                }
            },
            order: [['id', 'DESC']]

        });
        return res.json(vendas);
    },

    async listarEntregasAbertas(req, res) {
        const id = req.params.id;

        const vendas = await Venda.findAll({
            include: [Formas_pagamento, Cliente, {

                model: itensVenda,
                include: [Produto, Molho,
                    {
                        model: itensVendasAdicionai,
                        required: false,
                        where: {
                            itemSeq: {
                                [Op.col]: 'itensVendas.itemSeq'
                            },
                            itemId: {
                                [Op.col]: 'itensVendas.itemId'
                            }
                        },
                        include: [Adicionais]

                    }]
            }],
            where: {
                id_abertura_caixa: id,
                status: {
                    [Op.eq]: "1"
                },
                destino_venda: {
                    [Op.eq]: "ENTREGA"
                }
            },
            order: [['id', 'DESC']]

        });
        return res.json(vendas);
    },

    async venda(req, res) {
        const id = req.params.id;
        const venda = await Venda.findAll(
            {
                where: {
                    id: id
                },
                include: {
                    model: itensVenda,
                    include: [Produto, Molho,
                        {
                            model: itensVendasAdicionai,
                            required: false,
                            where: {
                                itemSeq: {
                                    [Op.col]: 'itensVendas.itemSeq'
                                },
                                itemId: {
                                    [Op.col]: 'itensVendas.itemId'
                                }
                            },
                            include: [Adicionais]

                        }]
                },
                order: [['id', 'ASC']]
            }
        );
        return res.json(venda);
    },

    async register(req, res) {

        //console.log(req.body);
        const venda = await Venda.create(req.body);
        return res.json(venda);
    },

    async update(req, res) {

        const venda = await Venda.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(venda);
    },

    async delete(req, res) {

        const adicional = await itensVendasAdicionai.destroy({
            where: {
                vendaId: req.body.id
            }
        });

        const item = await itensVenda.destroy({
            where: {
                vendaId: req.body.id
            }
        });

        const movimentacao = await contasMovimentacao.destroy({
            where: {
                vendaId: req.body.id
            }
        });

        const venda = await Venda.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(venda);
    },

    async registerItem(req, res) {

        //console.log(req.body);
        const item = await itensVenda.create(req.body);
        return res.json(item);
    },
    async itensVenda(req, res) {
        //console.log(req.body);
        const vendaId = req.params.vendaId;
        const itens = await itensVenda.findAll({ where: { vendaId: vendaId } });
        return res.json(itens);
    },
    async itensVendaAdicionais(req, res) {

        // console.log(req.body);


        const adicionais = await itensVendasAdicionai.create(req.body);
        // const adicionais = await itensVendasAdicionai.bulkCreate(req.body);
        console.log(adicionais);
        return res.json(adicionais);
    },
    async deleteItensAdicional(req, res) {
        const adicional = await itensVendasAdicionai.destroy({
            where: {
                vendaId: req.body.vendaId,
                itemId: req.body.itemId,
                itemSeq: req.body.itemSeq,
                adicionalSeq: req.body.adicionalSeq,
                adicionalId: req.body.adicionalId,
            }
        });
        return res.json(adicional);
    },
    async deleteItensAdicionais(req, res) {
        const adicional = await itensVendasAdicionai.destroy({
            where: {
                vendaId: req.body.vendaId,
                itemId: req.body.itemId,
                itemSeq: req.body.itemSeq
            }
        });

        // console.log(adicional);
        return res.json(adicional);
    },
    async deleteItem(req, res) {

        // console.log(req.body);
        const item = await itensVenda.destroy({
            where: {
                vendaId: req.body.vendaId,
                itemId: req.body.itemId,
                itemSeq: req.body.itemSeq

            }
        });
        return res.json(item);
    },

    async updateItemVenda(req, res) {

        const item = await itensVenda.update(req.body, {
            where: {
                vendaId: req.body.vendaId,
                itemId: req.body.itemId,
                itemSeq: req.body.itemSeq
            }
        });
        return res.json(item);
    },
};