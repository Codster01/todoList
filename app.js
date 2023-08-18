const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.get('/',function(req,res){
 
    
  var today = new Date();
  var options = {weekday:'long',
                 year:'numeric',
                 month:'long'};
  var currdate = today.getDay();
  var day = '';
  
  var day = today.toLocaleDateString('en-us',options);


res.render('index',{kindofDay:day});
})

app.post('/',function(req,res){
 var item = req.body.newitem;
 
 res.render("index",{newitem:item});

});

app.listen(3000,function(){
    console.log("Server is started!");
})