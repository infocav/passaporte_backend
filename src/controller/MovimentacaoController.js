const { movimentacaoFatura } = require('../models');
const { faturaCliente } = require('../models');

const { Op } = require('sequelize');
const sequelize = require('sequelize');
const { contasCliente } = require('../models');

module.exports = {
    async movimentacaoFaturas(req, res) {
        const movimentacoes = await movimentacaoFatura.findAll();
        return res.json(movimentacoes);
    },
    async registrarMovimentacao(req, res) {
        const contaId = req.body.contaId;
        let fatura = await faturaCliente.findOne({where: { contaId: contaId, data_fechamento: null }});
        
        if ( !fatura ){
            fatura = await faturaCliente.create({contaId: contaId, data_fechamento: null});
        }

        let movimentacao = {status: false};

        if (fatura && fatura.id) {
            movimentacao = await movimentacaoFatura.create({
                                                                                                    ...req.body.movimentacaoFaturas,
                                                                                                    faturaId:  fatura.id
                                                                                                });
        }

        return res.json(movimentacao);
    },

};