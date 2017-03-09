// foodz.js
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'hbs'); //setting that we need handlebars (templating) but it draws from 'views'
app.use(express.static('public')); //this allows everything to use the CSS
app.use(bodyParser.urlencoded({extended: false}));


class recipeObj{
    constructor(name, description, category){
       this.name = name;
       this.description = description;
       this.category = category;
    }
}
const arrayOfRecipes = [];
const recipe1 = new recipeObj("chocoramen", "ramen noodles in a chocolate almond milk broth", "breakfast");
const recipe2 = new recipeObj("lycheezy", "cheese pizza with lychee on top", "anytime");
const recipe3 = new recipeObj("crazy cookie", "a 1 foot diameter cookie", "dinner");
arrayOfRecipes.push(recipe1);
arrayOfRecipes.push(recipe2);
arrayOfRecipes.push(recipe3);


app.get('/', (req, res)=>{
    let filteredRecipes = [];
    let currCategory = req.query.filterCategory;
    if(req.query.filterCategory !== undefined){
        arrayOfRecipes.forEach((ele)=>{
            if((ele.category === req.query.filterCategory)){
                filteredRecipes = filteredRecipes.concat(ele);
            }
        });
        res.render('homepage', {'recipeItem': filteredRecipes, 'message': currCategory + " only"});
    }else{

        res.render('homepage', {'recipeItem': arrayOfRecipes, 'message': "all"});
    }

});

app.post('/', function(req, res) {
    console.log(req.body);
    res.redirect('/');
});

app.listen(3000);