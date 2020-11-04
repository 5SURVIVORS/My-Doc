const joi = require('@hapi/joi')

const registerDocValidation = data =>{
    const validation = joi.object({
        name:joi.string().min(4).required(),
        email:joi.string().required().email(),
        password:joi.string().min(4).required(),
        address : joi.string().required(),
        city : joi.string().required(),
        phoneNumber : joi.string().required(),
        category :joi.string().required(),
        cabineName :joi.string().required(),
        urlCertificate :joi.string().required(),
        accountBanc: joi.string().required(),
        price: joi.number().required(), 
    
    })
    return validation.validate(data);
}
const loginDocValidation = data =>{
    const validation = joi.object({
        email:joi.string().required().email(),
        password:joi.string().min(4).required(),

    })
    return validation.validate(data);
}
module.exports.registerDocValidation = registerDocValidation;
module.exports.loginDocValidation = loginDocValidation ;