import Joi from "joi"
const registerSchema = Joi.object({
  phone: Joi.string().pattern(/^[0-9]{10}$/)
}).options({ allowUnknown: true })

const validateRegister = input => {
  const result = registerSchema.validate(input, {
    abortEarly: false,
  })
  return result
}

export default validateRegister
