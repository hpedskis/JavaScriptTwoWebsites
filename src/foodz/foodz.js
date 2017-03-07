// foodz.js
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'hbs'); //setting that we need handlebars (templating) but it draws from 'views'
app.use(express.static('public')); //this allows everything to use the CSS
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res)=>{
    console.log(req.body);
    res.render('homepage', {'body' : 'inside homepage what up'});
});

app.post('/', function(req, res) {
    console.log(req.body);
    // change the global
    let myName = req.body.numWords;
    res.redirect('/');
});

app.listen(3000);