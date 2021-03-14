const { User } = require('../models');
var jwt = require('jsonwebtoken');


module.exports = {
    async login(req, res) {
        if (req.body.user === 'admin' && req.body.pwd === 'admin') {
            //auth ok
            const id = 1; //esse id viria do banco de dados
            var token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });
            return res.json({ auth: true, token: token });
        }

        res.status(500).json({ message: 'Login inválido!' });
        return res.json(JSON.stringify(users));
    },

    async logout(req, res) {

        return res.json({ auth: false, token: null });
    },

    async users(req, res) {
        const users = await User.findAll();
        return res.json(JSON.stringify(users));
    },

    async user(req, res) {
        const id = req.params.id;
        const user = await User.findAll({ where: { id: id } });
        return res.json(JSON.stringify(user));
    },

    async register(req, res) {
        const user = await User.create(req.body);
        return res.json(user);
    }
};