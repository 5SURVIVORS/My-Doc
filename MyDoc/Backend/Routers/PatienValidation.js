const joi = require('@hapi/joi')

const registerPatValidation = data =>{
    const validation = joi.object({
        name:joi.string().min(4),
        email:joi.string().email(),
        password:joi.string().min(4),
        address : joi.string(),
        city : joi.string(),
        phoneNumber : joi.string(),
        accountBanc: joi.string(),
    
    })
    return validation.validate(data);
}
const loginPatValidation = data =>{
    const validation = joi.object({
        email:joi.string().required().email(),
        password:joi.string().min(4).required(),

    })
    return validation.validate(data);
}
module.exports.registerPatValidation = registerPatValidation;
module.exports.loginPatValidation = loginPatValidation ;