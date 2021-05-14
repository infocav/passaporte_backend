const { Op } = require('sequelize');
const sequelize = require('sequelize');
const { Cliente } = require('../models');
const { contasCliente } = require('../models');
const clientes = require('../clientesImport');

module.exports = {
    async clientes(req, res) {

        // console.log("CLIENTES: ", req.query.offset);
        const clientes = await Cliente.findAndCountAll({
            include: {
                model: contasCliente,
                required: false,
                where: 
                {
                    status: true 
                },
            },
            order: [['id', 'ASC']],
            limit: 50,
            offset: req.query.offset


        });

        // console.log(res.json(clientes));
        return res.json(clientes);
    },

    async cliente(req, res) {
        const id = req.params.id;
        const cliente = await Cliente.findAll({
            include: {
                model: contasCliente
            },
            where: { id: id },
            order: [['id', 'ASC']]
        });
        return res.json(cliente);
    },

    async clienteDinamico(req, res) {
        const search = req.query.search;

        // console.log(req);
        const cliente = await Cliente.findAll({
            include: {
                model: contasCliente
            },
            // where: { id: id },
            where: {
                [Op.or]: [
                    {
                        nome: {
                            [Op.like]: '%' + search + '%'
                        }
                    },
                    {
                        sobrenome: {
                            [Op.like]: '%' + search + '%'
                        }
                    },
                    {
                        email: {
                            [Op.like]: '%' + search + '%'
                        }
                    },
                    {
                        endreco: {
                            [Op.like]: '%' + search + '%'
                        }
                    },
                    {
                        bairro: {
                            [Op.like]: '%' + search + '%'
                        }
                    }
                    ,
                    {
                        ponto_referencia: {
                            [Op.like]: '%' + search + '%'
                        }
                    }
                    ,
                    {

                        [Op.like]: sequelize.literal(`"Cliente"."telefones"#>>'{}' like ` + `'%` + search + `%'`),

                    }

                ]

            },
            order: [['id', 'ASC']],
            limit: 100
        });
        return res.json(cliente);
    },

    async register(req, res) {
        const cliente = await Cliente.create(req.body);
        return res.json(cliente);
    },
    async bulkregister(req, res) {

        const tamanho = clientes.length;


        for (i = 0; i < tamanho; i++) {
            var c = await Cliente.create(clientes[i]);
            console.log(c);

        }
        // console.log("tamanho dos clientes: ", c);
        return res.json({ status: true });
    },

    async update(req, res) {

        const cliente = await Cliente.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        return res.json(cliente);
    },

    async delete(req, res) {
        const cliente = await Cliente.destroy({
            where: {
                id: req.body.id
            }
        });
        return res.json(cliente);
    },

};