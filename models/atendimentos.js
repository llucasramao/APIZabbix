const axios = require('axios');

class tipes {
    down(atendimento) {
        var message = atendimento.message
        //sendMessage(servidor, erro)
        sendButton(servidor, erro)
    }
}

module.exports = new tipes



function sendMessage(message) {
    var host = 'http://api.spacewebso.com.br:2121/api'
    var number = '120363041666717455'
    var session = 'botSpaceWeb'
    var sessionkey = '$2b$10$XRZ0kKowwUCEHV77nVuscOSWuUog4mIg1FnSJ4k4TBKbX3quA6XjK'
    var isGroup = true


    var axios = require('axios');
    var data = JSON.stringify({
        "phone": number,
        "message": message,
        "isGroup": isGroup
    });

    var config = {
        method: 'post',
        url: `${host}/${session}/send-message`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionkey}`
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            if (response.data.status == 'success') {
                console.log('Mensagem Enviada -', `Servidor: ${servidor} Erro: ${erro}`)
            } else {
                console.log('Erro: response-not-success')
            }
        })
        .catch(function (error) {
            console.log('Erro: catch-function-error', error);
        });

}

function sendButton (message){
    var host = 'http://api.spacewebso.com.br:2121/api'
    var number = '120363041666717455'
    var session = 'botSpaceWeb'
    var sessionkey = '$2b$10$o8KptoEXotQi1OZM9TRlyuYY4IpoRnBSoakpxbW3CpPCgvGzCPNoq'
    var isGroup = true

    var axios = require('axios');
    var data = JSON.stringify({
    "phone": number,
    "message": message,
    "isGroup": isGroup,
    "title": "-- Problema de Produção --",
    //"footer": "This is the footer for the message. Its optional to send",
    "buttons": [
        {
        "buttonId": "id1",
        "buttonText": {
            "displayText": "Em análise"
        },
        "type": 1
        },
        {
        "buttonId": "id2",
        "buttonText": {
            "displayText": "Resolvido"
        },
        "type": 1
        }
    ]
    });

    var config = {
    method: 'post',
    url: `${host}/${session}/send-buttons`,
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${sessionkey}`
    },
    data : data
    };

    axios(config)
    .then(function (response) {
        if (response.data.status == 'success') {
            console.log('Mensagem Enviada -', `Servidor: ${servidor} Erro: ${erro}`)
        } else {
            console.log('Erro: response-not-success')
        }
    })
    .catch(function (error) {
        console.log('Erro: catch-function-error', error);
    });

}