const express = require('express');
const user = require('./Routes/user');
const app = express();
app.set('view engine', 'ejs');

app.use(user);

//app.use('/sample',user) => sample will be always present in the url and every route will be prefixed with /sample
app.listen(3000);
/*{app.get('/',(req,res)=>{
    //console.log('Hello World');
    //res.status(500);
    //res.json({message:"Hello World"});
    //res.status(200).send("hi");
    //res.send("Hello World");
    res.render('index.ejs',{text:"MERN"});
});
app.get('/about',(req,res)=>{
    res.send("User details");
});
app.get('/user',(req,res)=>{
    res.send("New user");
})
app.get('/user/newuser',(req,res)=>{
    res.send("New user added");
})}*/
