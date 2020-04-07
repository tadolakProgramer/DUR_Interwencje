const vMaszyny = require('../models/v_maszyny');

module.exports = {
    async getListaMaszyn (req, res) {
    try {
        await vMaszyny.findAll()
            .then(listaMaszyn => res.send(listaMaszyn))
            .catch(error => console.log(error))
    }
    catch (err) {
        console.log('error', err);
        res.status(400).send({
            error: 'vMaszyny error'
        })
    }
},
    async postNewNotification (req, res){

    }
};