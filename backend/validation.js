const zod = require("zod");

const signupSchema = zod.object({
    firstname:zod.string(),
    lastname:zod.string(),
    email:zod.string(),
    password:zod.string().min(8)
})

const signinSchema = zod.object({
    email:zod.string(),
    password:zod.string().min(8)
})

module.exports={
    signinSchema,signupSchema
}