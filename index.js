const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
let contacts=[
    {
        id: 1,
        name: 'Arto Hellas',
        number: ''
    },
    {  
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
      },
      {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
      },
      {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
      }
]
const generateId=()=>{
    return Math.floor(Math.random()*1001);
}
// const requestLogger=(req,res,next)=>{
//     console.log(`method: ${req.method}`);
//     console.log(`path: ${req.path}`);
//     console.log(`body: ${req.body}`);
//     console.log('---');
//     next();
// }
const unknownEndPoint=(req,res)=>{
    res.status(404).send({error: "unknown endpoint"})
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
        
        res.json(contacts);
    })
    .post((req,res)=>{
        const contact=req.body;
        if(!contact.name || !contact.number){//if name or number of request is missing
            return res.status(400).json({
                error: 'name or number is missing'
            })
        }else if(contacts.find((c)=>c.name===contact.name)){
            return res.status(400).json({
                error: 'name must be unique'
            })
        }
        contact.id=generateId();
        contacts=contacts.concat(contact);
        console.log(contact);
        res.json(contact)
    })

app.route('/info')
.get((req,res)=>{
    res.send(`<p>Phonebook has info for ${notes.length} people</p>
            <p>${new Date()}</p>`)
})

app.route('/api/persons/:id')
.get((req,res)=>{
    const contact=contacts.find((contact)=>contact.id===parseInt(req.params.id));
    console.log(contact)
    if(!contact){
        return res.status(404).end();
    }
    res.json(contact)
})
.delete((req,res)=>{
    contacts=contacts.filter((contact)=>contact.id!==parseInt(req.params.id));
    res.status(204).end();
})

app.use(unknownEndPoint)

const port=process.env.PORT||3001;
app.listen(port);
console.log(`server is running on ${port}`)
