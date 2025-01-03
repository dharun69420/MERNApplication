const express = require('express');
let router = express.Router();

router.get('/',(req,res)=>{
    //console.log('Hello World');
    //res.status(500);
    //res.json({message:"Hello World"});
    //res.status(200).send("hi");
    //res.send("Hello World");
    res.render('index.ejs',{text:"MERN"});
});



router.route('/about/:id')
    .get((req, res) => {
        console.log(req.user);//PARAMETER MIDDLEWARE => requested from the middleware
        res.send("id value " + req.params.id);
    })
    .put((req, res) => {
        res.send("retrieve value " + req.params.id);
    })
    .delete((req, res) => {
        res.send("delete value " + req.params.id);
    });
//PARAMETER MIDDLEWARE => loads until the next function is called
const users =[{"name":"John","age":25},{"name":"Doe","age":30}];
router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.user = users[id];
    next();
});

//PASSING PARAMETERS IN THE URL
/*router.get('/about/:id',(req,res)=>{
    //res.send("User details");
    res.send("id value "+req.params.id);
}); */


router.get('/user',(req,res)=>{
    res.send("New user");
})

router.post('/create',(req,res)=>{
    res.send("New user");
})


router.get('/user/newuser',(req,res)=>{
    res.send("New user added");
})

module.exports = router;
