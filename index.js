/*eslint-env es6*/
require('dotenv').config();
const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const Contact=require('./models/contact.js');
const unknownEndPoint=(req,res)=>{
    res.status(404).send({error: "unknown endpoint"})
}
const errorHandler=(error,req,res,next)=>{
    console.log(error.message);
    if(error.name==='CastError'){
        return res.status(400).send({error: 'malformatted id'})
    }
    next(error);
}
morgan.token('body',(req)=>{
    return JSON.stringify({name: req.body.name, number: req.body.number})
})
const app=express();
app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
// app.use(requestLogger);

app.route('/api/persons')
    .get((req,res)=>{
        Contact.find()
        .then((result)=>{
            res.json(result);

        })
    })
    .post((req,res)=>{
        const contact= new Contact({
            name: req.body.name,
            number: req.body.number
        });
        contact.save()
        .then((savedContact)=>{
            res.json(savedContact);
        })
        .catch((err)=>{
            console.log(err.message);
            res.send(err.message)
        })
       
    })

app.route('/info')
.get((req,res)=>{
    Contact.find()
    .then((contacts)=>{
        res.send(`<p>Phonebook has info for ${contacts.length} people</p>
        <p>${new Date()}</p>`)
    })
})

app.route('/api/persons/:id')
.get((req,res,next)=>{
    Contact.findById(req.params.id)
    .then((searchedContact)=>{
        res.json(searchedContact);
    })
    .catch((err)=>next(err))
})
.delete((req,res,next)=>{
    console.log(req.params.id);
    Contact.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(204).end(); 
    })
    .catch((err)=>next(err))
})
.put((req,res,next)=>{
    const updatedContact={
        name: req.body.name,
        number: req.body.number
    }
    Contact.findByIdAndUpdate(req.params.id,updatedContact,{runValidators: true, context:'query'})
    .then(()=>{
        console.log('valid')
        res.json(updatedContact);
    })
    .catch((err)=>{
        console.log('not valid');
        res.json(err.message)
    })
   
})
app.use(errorHandler)
app.use(unknownEndPoint)

const port=process.env.PORT||3001;
app.listen(port);
console.log(`server is running on ${port}`)
