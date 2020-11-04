const express = require('express');
const router = express.Router();
const Messages = require('../Models/MessageSchema.js');

const verify = require('./Verification.js')


router.get('/', async (req, res) => {
    await Messages.findAll().then((messages) => res.json(messages))
    .catch((err) => console.log(err))
})

router.get('/:id', async (req, res) => {
    await Messages.findByPk( req.params.id).then((messages) => res.json(messages))
    .catch((err) => console.log(err))
})

router.post('/register', async (req, res) => {
    await Messages.create({
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        text : req.body.text
     })
        .then((user) => res.json(user))
        .catch((err) => console.log(err))
})

router.put('/:id', async (req, res) => {
    Messages.findByPk(req.params.id).then((messages) => {
        messages.update({

        }).then((messages) => {
            res.json(messages);
        });
    })
    .catch((err) => console.log(err))
})

router.delete('/:id', async (req, res) => {
    await Messages.findByPk(req.params.id).then((messages) => {
        messages.destroy();
    }).then(() => {
        res.json("deleted");
    })
    .catch((err) => console.log(err))
});

router.delete('/',async (req, res) => {
    await Messages.destroy({where:{},truncate : true}).then(() => res.json("cleared"))
    .catch((err) => console.log(err))
});


module.exports = router;