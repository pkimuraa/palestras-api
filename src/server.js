const express = require ('express');
const routes = require('./routes');
const cors = require('cors')
const mongoose = require('mongoose');



const app =  express();
app.use(cors())


mongoose.connect('mongodb+srv://pkimura:PT4AjSfFt663Pec@novatics-yeuri.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

app.use(express.json());
app.use(routes);


app.listen(3333); 