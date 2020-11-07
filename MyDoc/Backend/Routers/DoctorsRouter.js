const express = require('express');
const router = express.Router();
const Doctors = require('../models/DoctorSchema.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const verify = require('./Verification.js')
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

dotenv.config();

const { registerDocValidation, loginDocValidation } = require('./DoctorValidation.js')

router.get('/', async (req, res) => {

    await Doctors.findAll().then((doctors) => res.json(doctors))
        .catch((err) => console.log(err))
})

router.get('/:id', async (req, res) => {
    await Doctors.findByPk( req.params.id).then((doctors) => res.json(doctors))
    .catch((err) => console.log(err))

})

router.post("/docstate",async(req,res)=>{
  const doctorType= await Doctors.findAll({where: { category :req.body.docType ,city:req.body.city } })
  const target=doctorType
  if(!target) return res.status(400).send("No doctor found")
  if(target) return res.status(200).json(target)
});


router.post("/docId",async(req,res)=>{
  const doctor= await Doctors.findOne({where: { id :req.body.docId } })
  const id=doctor
  console.log(id)
  if(!id) return res.status(400).send("No doctor found")
  if(id) return res.status(200).json(doctor)
});

router.post("/doctypes",async(req,res)=>{
  const doctorType= await Doctors.findAll({where: { category :req.body.docType } })
  const target=doctorType
  if(!target) return res.status(400).send("no such catgeroy")
  if(target) return res.status(200).json(target)
});

router.post('/register', async (req, res) => {
  console.log(req.body)
    console.log(typeof req.body)
    const { error } = registerDocValidation(req.body)
    if (error) return res.send(error.details[0].message)
    const emailExist = await Doctors.findOne({ where: { email: req.body.email } })
    if (emailExist) return res.status(400).send('Email already exist')
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, salt)
console.log(hashpassword)
    await Doctors.create({
        name: req.body.name,
        password: hashpassword,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber,
        category: req.body.category,
        cabineName: req.body.cabineName,
        urlCertificate: req.body.urlCertificate,
        accountBanc: req.body.accountBanc,
        price: req.body.price
    })
        .then((user) => res.json(user))
        .catch((err) => console.log(err))
})

router.post('/login', async (req, res) => {
  console.log(req.body, 'testing the server');
    const { error } = loginDocValidation(req.body)
    if (error) return res.send(error.details[0].message)
    const user = await Doctors.findOne({ where: { email: req.body.email } })
    if (!user) return res.send('Email is not found')
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.send('Invalid password ')
    const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN)
    return res.status(200).header('auth_token', token).json({ id: user.id , name:user.name });
})


router.post('/sendemail',async (req, res) => {
   await Doctors.findAll({where:{email:req.body.email}}).then((obj) => {
      nodemailer.createTestAccount((err, email) => {
        var transporter = nodemailer.createTransport(
          smtpTransport({
            service: "gmail",
            port: 465,
            secure: false,
            host: "smtp.gmail.com",
            auth: {
              user: "mydocapplication123456@gmail.com",
              pass: "Mydocapplication123",
            },
            tls: {
              rejectUnauthorized: false,
            },
          })
        );
  
        let mailOptions = {
          from: "mydocapplication123456@gmail.com",
          to: `${req.body.email}`,
          subject: "my Doc application",
          text: `thanks u for sign in .`,
        };
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err);
          }
          res.send(info);
        });
      });
    });
  });

router.put('/:id', async (req, res) => {

    Doctors.findByPk(req.params.id).then((doctors) => {
        doctors.update({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            phoneNumber: req.body.phoneNumber,
            category: req.body.category,
            cabineName: req.body.cabineName,
            urlCertificate: req.body.urlCertificate,
            Patients: req.body.Patients,
            accountBanc: req.body.accountBanc,
            price: req.body.price,
        }).then((doctors) => {
            res.json(doctors);
        });
    })
        .catch((err) => console.log(err))
})


router.delete('/:id', async (req, res) => {

    await Doctors.findByPk(req.params.id).then((doctors) => {
        doctors.destroy();
    }).then(() => {
        res.json("deleted");
    })
        .catch((err) => console.log(err))
});


router.delete('/',async (req, res) => {
    await Doctors.destroy({where:{},truncate : true}).then(() => res.json("cleared"))
    .catch((err) => console.log(err))

});


module.exports = router;