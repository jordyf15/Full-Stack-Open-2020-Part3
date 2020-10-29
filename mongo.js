const mongoose = require('mongoose');

if(process.argv.length<3){
    console.log('Please provide the password as an argument: node mongo.js <password>')
}else{
const password=process.argv[2]
const url=`mongodb+srv://user:${password}@cluster0.o9nlp.mongodb.net/PhoneBook?retryWrites=true&w=majority`
mongoose.connect(url,{useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=>{
    console.log('connected to database');
    const contactSchema = new mongoose.Schema({
        name: String,
        number: String
    });
    const Contact= mongoose.model('Contact',contactSchema);

    if(process.argv.length===3){
        Contact.find()
        .then((result)=>{
            console.log('phonebook:')
            result.forEach(contact=>console.log(`${contact.name} ${contact.number}`));
            mongoose.connection.close();   
        })
    }else if(process.argv.length===5){
        const contact=new Contact({
            name: process.argv[3],
            number: process.argv[4]
        });
        
        contact.save()
        .then((res)=>{
            console.log(`added ${res.name} number ${res.number}to phonebook`);
            mongoose.connection.close();
        })
    }

})
.catch((err)=>{
    console.log('wrong password')
})

}