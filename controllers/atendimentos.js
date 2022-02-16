const tipes = require('../models/atendimentos')

module.exports = app => {
    app.post('/down', (req, res) => {
       const atendimento = req.body

        tipes.down(atendimento)
        res.status(200).json("Recebido!")
    })
}