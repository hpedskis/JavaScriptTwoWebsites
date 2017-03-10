// dicey.js
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.set('view engine', 'hbs'); //setting that we need handlebars (templating) but it draws from 'views'
app.use(express.static('public')); //this allows everything to use the CSS
app.use(bodyParser.urlencoded({extended: false}));


let data = fs.readFileSync('../dicey/diceware.wordlist.txt', 'utf8');
const dataObj = setUpData(data); //this is the object with all of the num--> passwords

function setUpData(data){
    let splitData=data.split("\n");
    let dataHash = {};
    splitData.forEach((ele)=>{
        let split = ele.split('	');
        dataHash[split[0]] = split[1];
    });
    return dataHash;
}

function setUpQueryWords(numWords, glue){
    //for numWords times, get random num 1-9 4 times
    let result = {
        numInfo: {},
        password: ""
    };
    for(let j=0; j< numWords; j++){
        let num = "";
        for(let i=0; i< 5; i++){
            let ranNum = Math.floor(Math.random() * 6) +1;
            num = num.concat(ranNum);
        }

        result.password = result.password.concat(dataObj[num]);
        result.numInfo[num] = dataObj[num];
        result.password = result.password.concat(glue);
    }
    return result;

}
console.log(setUpQueryWords(3, '-'));

app.get('/', (req, res)=>{
    res.redirect('/dice');
    res.render('about', {'item' : 'pizza', 'message': 'hello there'});
});

app.post('/', function(req, res) {
    console.log(req.body);

    res.redirect('/');
});

passwordObj = {};
app.get('/dice', (req,res) =>{
    //using req.query.numWords, call the "get word" that num times and append a seperator in between
    if (req.query.numWords !== undefined) {
        let numWordsWanted = req.query.numWords;
        const info = setUpQueryWords(numWordsWanted, req.query.glue);
        passwordObj = info;
        console.log(info);
    }

    res.render('homepage', {'password':passwordObj.password, 'passwordInfo' : passwordObj.numInfo});


});

app.get('/about', (req, res) =>{
    res.render('about', {'item' : 'pizza', 'message': 'hello there'});
});



app.listen(3000);