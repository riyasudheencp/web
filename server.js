const express=require('express');
const x=require('express-handlebars');
var app=express();
app.engine('handlebars',x({defaultLayout:'mainpage'}));
app.set('view engine','handlebars');
app.use(express.static('views/static'));
app.use(express.urlencoded());
app.post('/data',(req,res)=>{
    var name=req.body.name;
    var adress=req.body.adress;
    var place=req.body.place;
    var mobile=req.body.mobile;
    var email=req.body.email;

console.log(name,adress,place,mobile,email);



});
app.post('/login',(req,res)=>{
    var user=req.body.username;
    var pass=req.body.password;
    if (user=="admin" && pass=="1234"){
        res.send(JSON.stringify({status:"succesfulle"}));
    }
        else{
            res.send(JSON.stringify({status:"faile"}));     
        }

    
       

});
app.post('/register',(req,res)=>{
    var name=req.body.name;
    var admno=req.body.admno;
    var collage=req.body.collage;
        res.send(name+admno+collage);
});
app.get('/',(req,res)=>{
    res.render("index",{name:"riyas"});
});
app.get('/home',(req,res)=>{
    res.send("welcome");
});
app.get('/about',(req,res)=>{
    res.render("about");
});

app.get('/contact',(req,res)=>{
    res.render("contact");
});
app.get('/gallary',(req,res)=>{
    res.render("gallary");
});
app.get('/home/contact',(req,res)=>{
    res.send('[{"name":"riyas",age:23}{"name":"nikhil""age":25}]');
});

app.listen(process.env.PORT || 5000,()=>{
    console.log('running stage')
});