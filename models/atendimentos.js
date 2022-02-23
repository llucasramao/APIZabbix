const axios = require('axios');

class tipes {
    down(atendimento) {
        var servidor = atendimento.servidor
        var erro = atendimento.erro
        sendMessage(servidor, erro)
    }
}

module.exports = new tipes



function sendMessage(servidor, erro) {
    var host = 'http://api.spacewebso.com.br:2121/api'
    var number = '120363041666717455'
    var message = `Servidor ${servidor} parrou de funcionar!\n Erro: ${erro}`
    var session = 'botSpaceWebSO'
    var sessionkey = '$2b$10$u_3.V2BhhYsWZ3LRndnNA.H0zKW9iGm0.5VbLuQn8gVioD4Sm5j6a'
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