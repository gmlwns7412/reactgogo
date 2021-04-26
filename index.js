const express = require('express')
const app = express ()
const port = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gmlwns7412:gmlwns7421@cluster0.l8fmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('mongodb conncet!!!'))
.catch(err=>console.log(err))

app.get('/',(req,res)=> res.send('hello world' ))

app.listen(port , ()=> console.log(`connect ${port}!`))