const db = require('../library/database')
var express = require('express')
var router = express.Router() 

/* var users = [
    {id: 1, firstName: 'John', lastName: "carter", age:34},
    {id: 2, firstName: 'James', lastName:"Brown", age:50},
    {id: 3, firstName: "Angelina",lastName:"Julie", age:41}
] */


router.get('/',async(req, res,next) => {
    try {
/*        res.send(users) */   
const users = await db.collection('users').find().toArray();
res.json(users);


} catch (error) {
        next(error)
    }
    
})

router.get("/:usersId",function(req, res,next){
    try {
        /* const user = users.find(use => use.id === +req.params.usersId)  */
        res.send(user)
    } catch (error) {
        next(error) 
    }
    
})

router.post("/", async (req, res,next)=> {
    try {
        const users = await db.collection('users').insertOne(req.body);
      
        res.status(201).end("added new user");
         /* res.send("Successfully logged in cool ") */
    } catch (error) {
        next(error)
    }
   
    })

router.delete("/:usersid", function (req, res,next) {
    try {
       const user = users.find(use => use.id === +req.params.usersid);
    res.status(204);
    res.end() 
    } catch (error) {
        next(error)
    }
    
    }); 



module.exports = router 