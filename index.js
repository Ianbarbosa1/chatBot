console.log('npm install qrcode-terminal')
console.log('npm install')
const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


let mensagem = `Olá! Sou o bot que irá te apresentar a você as alternativas para ter uma melhor experiência, tudo bem?
Como posso te ajudar hoje?
1 - Como funciona a entrega dos gases?
2 - Qual gás escolher?
3 - Quais são os tipos dos gases disponiveis e para que servem?
4 - Falar com atendente!`

let msg1 = `*Opção escolhida: Como funciona a entrega dos gases?*
A entrega é feita por profissionais especializados com o intuito de fazer com que os seus produtos cheguem em ótimo estado. As entregas são feitas em todas as regiões do Rio de Janeiro!`

let msg2 = `*Opção escolhida: Qual gás escolher?*
Se você tem uma duvida muito solida sobre qual gás escolher, por favor digite o numero *4* e fala com um dos nossos profissionais para ele te dar um suporte personalizado!`

let msg3 = `*Opção escolhida: Quais são os tipos dos gases disponiveis e para que servem?*
Acesse o nosso site mmrgases.com.br e veja qual o gas irá suprir a sua necessidade!`

let msg4 = `*Opção escolhida: Falar com atendente!*
Foi muito bom falar com você, tenha um ótimo dia!`


client.on('message_create', message => {
	if (message.body.toLocaleLowerCase() === 'mmr gases') {
	    message.reply(`${mensagem}`)
	}
    if(message.body.toLocaleLowerCase() === '1'){
        message.reply(`${msg1}`)
    }
    else if(message.body.toLocaleLowerCase() === '2'){
        message.reply(`${msg2}`);
    }
    else if(message.body.toLocaleLowerCase() === '3'){
        message.reply(`${msg3}`);
    }
    else if(message.body.toLocaleLowerCase() === '4'){
        message.reply(`${msg4}`);
    }
});

client.initialize();
