const express = require('express');
const router = express.Router();
const Patients = require('../models/PatientSchema.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const verify  = require('./Verification.js')

dotenv.config();

const {registerPatValidation , loginPatValidation} = require('./PatienValidation.js')

router.get('/' , async (req, res) => {
    await Patients.findAll().then((patients) => res.json(patients))
    .catch((err) => console.log(err))
})

router.get('/:id' , async (req, res) => {
    await Patients.findByPk(req.params.id).then((patients) => res.json(patients))
    .catch((err) => console.log(err))
})
router.post("/profile",async(req,res)=>{
    const patient= await Patients.findOne({where:{email:req.body.email}})
    const user=patient.dataValues
    if(!patient) return res.send("invalid patient")
    if(user)  return res.status(200).json(user)
})

router.post('/register', async (req, res) => {
    const {error} = registerPatValidation(req.body)
    if(error) return res.send(error.details[0].message)
    const emailExist = await Patients.findOne({ where: {email: req.body.email}})
    if(emailExist) return res.send('Email already exist')
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password , salt)
    await Patients.create({ 
        name: req.body.name,
        password: hashpassword ,
        email: req.body.email,
        address : req.body.address ,
        city : req.body.city ,
        phoneNumber : req.body.phoneNumber ,
        accountBanc: req.body.accountBanc ,
    })
        .then((user) => res.json(user))
        .catch((err) => console.log(err))
})

router.post('/login', async (req, res) => {
    const {error} = loginPatValidation(req.body)
    if(error) return res.send(error.details[0].message)
    const user = await Patients.findOne({ where: {email: req.body.email}})
    if(!user) return res.send('Email is not found')
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(! validPass) return res.send('Invalid password ')
    const token = jwt.sign({id:user.id},process.env.SECRET_TOKEN)
   return res.status(200).header('auth_token',token).json({id:user.id , name:user.name ,email:user.email})
})

router.put('/:id' , async (req, res) => {
    Patients.findByPk(req.params.id).then((patients) => {
        patients.update({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            address : req.body.address ,
            city : req.body.city ,
            phoneNumber : req.body.phoneNumber ,
            accountBanc: req.body.accountBanc ,
        }).then((patients) => {
            res.json(patients);
        })
        .catch((err) => console.log(err))
    });
})

router.delete('/:id' , async (req, res) => {
    await Patients.findByPk(req.params.id).then((patients) => {
        patients.destroy();
    }).then(() => {
        res.json("deleted");
    })
    .catch((err) => console.log(err))
});

router.delete('/' , async (req, res) => {
    await Patients.destroy({where:{},truncate : true}).then(() => res.json("cleared"))
    .catch((err) => console.log(err))
});


module.exports = router;