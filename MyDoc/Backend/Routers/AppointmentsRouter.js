const express = require('express');
const router = express.Router();

const Appointments = require('../models/AppointmentSchema.js');

const verify = require('./Verification.js')

router.post("/docId",async(req,res)=>{
    const doctor= await Appointments.findOne({where:{patientId: req.body.id}})
    const doc=doctor.dataValues
    if(!doctor) return res.send("invalid doctor")
    if(doc)  return res.status(200).json(doc)
})

router.get('/', async (req, res) => {
    await Appointments.findAll().then((appointments) => res.json(appointments))
    .catch((err) => console.log(err))
})

router.get('/:id', async (req, res) => {
    await Appointments.findByPk( req.params.id).then((appointments) => res.json(appointments))
    .catch((err) => console.log(err))
})

router.post('/register', async (req, res) => {
    await Appointments.create({
        patientId: req.body.patientId,
        doctorId: req.body.doctorId,
        check : req.body.check,
        price: req.body.price,
     })
        .then((user) => res.json(user))
        .catch((err) => console.log(err))
})

router.put('/:id', async (req, res) => {
    Appointments.findByPk(req.params.id).then((appointments) => {
        appointments.update({
            check:req.body.check
        }).then((appointments) => {
            res.json(appointments);
        });
    })
    .catch((err) => console.log(err))
})

router.delete('/:id', async (req, res) => {
    await Appointments.findByPk(req.params.id).then((appointments) => {
        appointments.destroy();
    }).then(() => {
        res.json("deleted");
    })
    .catch((err) => console.log(err))
});

router.delete('/',async (req, res) => {
    await Appointments.destroy({where:{},truncate : true}).then(() => res.json("cleared"))
    .catch((err) => console.log(err))
});


module.exports = router;