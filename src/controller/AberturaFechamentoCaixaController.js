const { Abertura_fechamento_caixa } = require('../models');
const { Caixa } = require('../models');

module.exports = {
    async afcs(req, res) {
        const afc = await Abertura_fechamento_caixa.findAll();
        return res.json(afc);
    },

    async afc(req, res) {
        const id = req.params.id;
        const afc = await Abertura_fechamento_caixa.findAll({

            where: { id: id }
        });
        return res.json(afc);
    },

    async caixa(req, res) {
        const id_caixa = req.params.id_caixa;
        const afc = await Abertura_fechamento_caixa.findAll({
            include: {
                model: Caixa
            },
            where: {
                id_caixa: id_caixa,
                data_fechamento: null
            }
        });

        if (afc.length > 0) {
            // console.log("CAIXA ABERTO: ", afc);
        } else {
            // console.log("CAIXA NÃO ABERTO: ", afc);
        }

        return res.json(afc);
    },

    async abrir(req, res) {
        const id_caixa = req.params.id_caixa;
        let caixa = [];

        const afc = await Abertura_fechamento_caixa.findAll({
            where: {
                id_caixa: id_caixa,
                data_fechamento: null
            }
        });

        if (afc.length > 0) {
            console.log("CAIXA ABERTO: ", afc);
            caixa = afc;
        } else {
            console.log("CAIXA NÃO ABERTO: ", afc);
            const novo_caixa = await Abertura_fechamento_caixa.create(req.body);
            console.log(novo_caixa);
            caixa = caixa.concat(novo_caixa);
        }
        return res.json(caixa);
    },

    async fechar(req, res) {
        const id_caixa = req.params.id_caixa;
        let caixa = [];

        const afc = await Abertura_fechamento_caixa.findAll({
            where: {
                id_caixa: id_caixa,
                data_fechamento: null
            }
        });

        if (afc.length > 0) {
            console.log("CAIXA ABERTO: FECHANDO CAIXA", afc, req.body);
            const novo_caixa = await Abertura_fechamento_caixa.update(req.body, {
                where: {
                    id_caixa: id_caixa,
                    data_fechamento: null
                }
            });
            console.log(novo_caixa);
            caixa = caixa.concat(novo_caixa);
        } else {
            console.log("CAIXA NÃO ABERTO: ", afc);
            caixa = afc;
        }
        return res.json(caixa);
    },


    async register(req, res) {
        const afc = await Abertura_fechamento_caixa.create(req.body);
        return res.json(afc);
    },

    async update(req, res) {

        const afc = await Abertura_fechamento_caixa.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(afc);
    },

    async delete(req, res) {
        const afc = await Abertura_fechamento_caixa.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(afc);
    }
};