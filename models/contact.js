const mongoose = require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
const url=process.env.MONGODB_URL;
console.log(`connecting to ${url}`);
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false})
.then(()=>{
    console.log('connected to database');
})
.catch((err)=>{
    console.log(`failed to connect : ${err.message}`);
})
const contactSchema= new mongoose.Schema({
    name: {type: String, unique: true,
    minlength: 3, required: true},
    number: {type: String, minlength: 8, required: true}
});
contactSchema.plugin(uniqueValidator);
contactSchema.set('toJSON',{
    transform: (doc,returnContact)=>{
        returnContact.id=returnContact._id.toString(),
        delete returnContact._id,
        delete returnContact.__v
    }
})
module.exports= mongoose.model('Contact',contactSchema);