require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemons = require('./models/pokemons');
const mongoose = require('mongoose');
const Pokes = require('./models/Pokes');


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once('open', ()=> {
      console.log('connected to mongo');
});

//middleware
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//index
app.get('/pokemons', (req, res)=>{
    Pokes.find({}) 
    .then((allPokes) => {
        console.log(allPokes);
        res.render('Index', { pokemons: allPokes });
        })
    .catch (error => {
        console.error(error)
    })
});

//new
app.get('/pokemons/new', (req, res) => {
    res.render('New')
});

//create
app.post('/pokemons/', (req, res)=>{
     Pokes.create(req.body) 
    .then((createdPokes) => {
     res.redirect('/pokemons')
    })
    .catch(error => { 
        console.error(error)
    })
});

//show
app.get('/pokemons/:id', (req, res) => {
    Pokes.findOne({_id: req.params.id})
    .then((foundPokes) => {
        res.render('Show', {
          pokes: foundPokes
        })
    })
    .catch(error => {
        console.error(error)
    })
});


app.listen(PORT, ()=>{
    console.log(`app is listening at: ${PORT}`)
});

