const express = require('express');
const userController = require('./controller/UserController');
const clienteController = require('./controller/ClienteController');
const produtoController = require('./controller/ProdutoController');
const caixaController = require('./controller/CaixaController');
const afcController = require('./controller/AberturaFechamentoCaixaController');
const molhoController = require('./controller/MolhoController');
const CaixaController = require('./controller/CaixaController');
const AdicionalController = require('./controller/AdicionalController');
const VendaController = require('./controller/VendaController');
const MesaController = require('./controller/MesaController')
const FormasPagamento = require('./controller/FormasPagamentoController');
const ContasClienteController = require('./controller/ContaController');
const ContaMovimentacaoController = require("./controller/ContaMovimentacaoController");
const ConfiguracaoController = require('./controller/ConfiguracaoController');

var builder = require('botbuilder');


const accountSid = 'AC9cab3aa0e749fd0a366206812531ddcc';
const authToken = '6ab2fea8e8cdb015d3033fba9823713b';
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const { TwilioAdapter } = require('botbuilder-adapter-twilio-sms');


var jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}

// var adapter = new builder.BotFrameworkAdapter(
//     {
//         appId: process.env.MICROSOFT_APP_ID,
//         appPassword: process.env.MICROSOFT_APP_PASSWORD
//     }
// );
// const adapter = new TwilioAdapter({
//     twilio_number: process.env.TWILIO_NUMBER,
//     account_sid: accountSid,
//     auth_token: authToken,
// });

const adapter = new TwilioAdapter({
    twilio_number: 'whatsapp:+14155238886',
    account_sid: accountSid,
    auth_token: authToken,
});


const routes = express.Router();

routes.post('/delivery', (req, res) => {
    console.log("REQ...?", req);
    adapter.processActivity(req, res, async (context) => {
        await context.sendActivity('I heard a message!');
    });
});


// routes.post('/delivery', (req, res) => {
//     // Use the adapter to process the incoming web request into a TurnContext object.
//     console.log("CHATBOT...?", req);
//     adapter.processActivity(req, res, async (turnContext) => {
//         // Do something with this incoming activity!
//         if (turnContext.activity.type === 'message') {
//             // Get the user's text
//             const utterance = turnContext.activity.text;

//             // send a reply
//             // await turnContext.sendActivity(`I heard you say ${utterance}`);
//             return res.send((`I heard you say ${utterance}`));

//         }
//     });
// });



// routes.post('/delivery', (req, res) => {

//     console.log("REQ....:", req);
//     console.log("BODY...:", req.body.Body);

//     const twiml = new MessagingResponse();

//     if (req.body.Body == '1') {
//         twiml.message('Você Escolheu  o 1');
//     } else if (req.body.Body == '2') {
//         twiml.message('Você Escolheu o 2');
//     } else {
//         twiml.message(
//             'Bem vindo a GateNOC\nEscolha uma das opções abaixo\nOpção 1\nOpção 2'
//         );
//     }
//     res.writeHead(200, { 'Content-Type': 'text/xml' });
//     res.end(twiml.toString());
// });


routes.get('/', (req, res) => res.json({ msg: 'OK' }));


routes.get('/users', userController.users);
routes.get('/user/:id', userController.user);
routes.post('/register', userController.register);
routes.post('/login', userController.login);
routes.post('/logout', userController.logout);

//configuracoes
routes.get('/configuracoes/all', ConfiguracaoController.configuracaos);
routes.get('/configuracoes/:id', ConfiguracaoController.configuracao);
routes.post('/configuracoes/register', ConfiguracaoController.register);
routes.post('/configuracoes/update', ConfiguracaoController.update);
routes.post('/configuracoes/delete', ConfiguracaoController.delete);


//cliente
// routes.get('/cliente/all', verifyJWT, clienteController.clientes);
routes.get('/cliente/searchDinamic', clienteController.clienteDinamico);
routes.get('/cliente/all', clienteController.clientes);
routes.get('/cliente/:id', clienteController.cliente);
routes.post('/cliente/register', clienteController.register);
routes.post('/cliente/bulkregister', clienteController.bulkregister);
routes.post('/cliente/update', clienteController.update);
routes.post('/cliente/delete', clienteController.delete);

//conta

routes.get('/conta/all', ContasClienteController.contas);
routes.get('/conta/teste', ContasClienteController.teste);
routes.get('/conta/:id', ContasClienteController.conta);
routes.get('/conta/movimentacao/:clienteId', ContasClienteController.movimentacao);
routes.post('/conta/register', ContasClienteController.register);
routes.post('/conta/update', ContasClienteController.update);
routes.post('/conta/delete', ContasClienteController.delete);
routes.post('/conta/unableAll', ContasClienteController.unableAll);
routes.post('/conta/updatelimite', ContasClienteController.updateLimite);



//contaMovimentacao

routes.get('/contaMovimentacoes/all', ContaMovimentacaoController.contas);
routes.get('/contaMovimentacoes/:id', ContaMovimentacaoController.conta);
routes.post('/contaMovimentacoes/register', ContaMovimentacaoController.register);
routes.post('/contaMovimentacoes/update', ContaMovimentacaoController.update);
routes.post('/contaMovimentacoes/delete', ContaMovimentacaoController.delete);
routes.post('/contaMovimentacoes/unableAll', ContaMovimentacaoController.unableAll);



//Produto

routes.get('/produto/all', produtoController.produtos);
routes.get('/produto/pdv', produtoController.produtosPDV);
routes.get('/produto/:id', produtoController.produto);
routes.post('/produto/register', produtoController.register);
routes.post('/produto/bulkregister', produtoController.bulkregister);
routes.post('/produto/update', produtoController.update);
routes.post('/produto/delete', produtoController.delete);

//caixa

routes.get('/caixa/all', caixaController.caixas);
routes.get('/caixa/:id', caixaController.caixa);
routes.post('/caixa/register', caixaController.register);
routes.post('/caixa/update', caixaController.update);
routes.post('/caixa/delete', caixaController.delete);

//formas de pagamento

routes.get('/formaspagamento/all', FormasPagamento.formasPagamentos);
routes.get('/formaspagamento/:id', FormasPagamento.formaPagamento);
routes.post('/formaspagamento/register', FormasPagamento.register);
routes.post('/formaspagamento/update', FormasPagamento.update);
routes.post('/formaspagamento/delete', FormasPagamento.delete);

//Abertura fechamento de caixa

routes.get('/afc/all', afcController.afcs);
routes.get('/afc/:id', afcController.afc);
routes.post('/afc/abrir/:id_caixa', afcController.abrir);
routes.post('/afc/fechar/:id_caixa', afcController.fechar);
routes.get('/afc/caixa/:id_caixa', afcController.caixa);
routes.post('/afc/register', afcController.register);
routes.post('/afc/update', afcController.update);
routes.post('/afc/delete', afcController.delete);

//molho

routes.get('/molho/all', molhoController.molhos);
routes.get('/molho/:id', molhoController.molho);
routes.post('/molho/register', molhoController.register);
routes.post('/molho/update', molhoController.update);
routes.post('/molho/delete', molhoController.delete);

//mesa

routes.get('/mesa/all', MesaController.mesas);
routes.get('/mesa/:id', MesaController.mesa);
routes.post('/mesa/register', MesaController.register);
routes.post('/mesa/update', MesaController.update);
routes.post('/mesa/delete', MesaController.delete);

//caixa
routes.get('/caixa/all', caixaController.caixas);
routes.get('/caixa/:id', caixaController.caixa);
routes.post('/caixa/register', caixaController.register);
routes.post('/caixa/update', caixaController.update);
routes.post('/caixa/delete', caixaController.delete);
routes.get('/caixa/fluxo/:id', VendaController.listarFluxo);


//adicional
routes.get('/adicional/all', AdicionalController.adicionais);
routes.get('/adicional/:id', AdicionalController.adicional);
routes.post('/adicional/register', AdicionalController.register);
routes.post('/adicional/update', AdicionalController.update);
routes.post('/adicional/delete', AdicionalController.delete);

//Venda
routes.get('/venda/all', VendaController.vendas);
routes.get('/venda/:id', VendaController.venda);
routes.post('/venda/register', VendaController.register);
routes.post('/venda/update', VendaController.update);
routes.post('/venda/delete', VendaController.delete);
routes.get('/venda/itens/:vendaId', VendaController.itensVenda);
routes.post('/venda/registerItem', VendaController.registerItem);
routes.post('/venda/deleteAdicional', VendaController.deleteItensAdicional);
routes.post('/venda/deleteItensAdicionais', VendaController.deleteItensAdicionais);
routes.post('/venda/deleteItem', VendaController.deleteItem);
routes.post('/venda/updateItemVenda', VendaController.updateItemVenda);
routes.post('/venda/registerAdicionais', VendaController.itensVendaAdicionais);
routes.get('/venda/entregas/abertas/:id', VendaController.listarEntregasAbertas);
routes.get('/venda/mesas/abertas/:id', VendaController.listarMesasAbertas);
routes.get('/venda/viajem/abertas/:id', VendaController.listarViajemAbertas);
routes.get('/venda/pedidos/incompletos/:id', VendaController.listarPedidosIncompletos);










module.exports = routes;