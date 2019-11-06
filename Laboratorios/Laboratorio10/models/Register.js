const Moongose = require("mongoose")

const RegisterSchema = Moongose.Schema({
    carnet:String,
    schedule:String,
    isLate:Boolean,
    datetime:Date
})

module.exports = Moongose.model('Register',RegisterSchema)