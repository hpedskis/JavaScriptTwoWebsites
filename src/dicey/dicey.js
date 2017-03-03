// dicey.js
const express = require('express');
const path = require('path');
const bodyParser = require ('body-parser');


//everything in this homework directory will be able to access static files in public

const app = express();
app.set('view engine', 'hbs'); //setting that we need handlebars (templating) but it draws from 'views'
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
function logger(req){
    console.log(req.method, req.url); //this logs the method and the url

}
//this middleware will be called with every single request
/*?
app.use((req, res, next) => {
    res.send("hello"); //this will cause every page to output "hello" right away
    logger(req);
    next();
});

//IMPORTANT: because app.use(logger) is listed first, it's the first thing that's outputted.
app.use(logger); //tells everything to also output method and url


//THIS means only say hello if you call with /a
app.use('/a', (req, res, next) => {
    res.send("hello"); //this will cause every page to output "hello" right away
    logger(req);
    next();
});
 /*/

//next is globally available. it's just the next middleweare

//this is going to be a form: it will be POST since we're updating/creating data
/*/
/cats
*name1
*name2
cat name: _____[ADD]

How do we get these names to appear on a page in an unordered list? need handlebars
/*/

const names = ['paw newman', 'bill furry'];



app.get('/', (req, res)=>{
    res.render('about', {'item' : 'pizza', 'message': 'hello there'});
});

app.post('/dice', (req,res) =>{
    names.push(req.body.catName);
    res.redirect('/cats');

});

app.use((req, res, next) =>{
    res.set('Server', 'My amazing server'); //header which is found in inspect->network->headers->response headers
    next(); //MUST CALL NEXT
});

/*/ //form but not sure where to put it rn TODO learn
<ul>
    <form method = "POST" action = "">
        <input type = "text" name = "catName" value = "">
        <input type = "submit" name = "" value = "">
        </ul>
    </form>
/*/
app.get('/about', function(req, res){
    res.send('a');
});



app.listen(3000);