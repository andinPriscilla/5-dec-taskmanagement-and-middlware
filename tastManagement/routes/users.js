var express = require('express')
var router = express.Router() 

var users = [
    {id: 1, firstName: 'John', lastName: "carter", age:34},
    {id: 2, firstName: 'James', lastName:"Brown", age:50},
    {id: 3, firstName: "Angelina",lastName:"Julie", age:41}
]

router.get('/',function(req, res) {
    res.send(users)
})

router.get("/:usersId",function(req, res) {
    const user = users.find(use => use.id === +req.params.usersId) 
    res.send(user)
})

router.post("/", function (req, res) {
    res.send("Successfully logged in cool ")
    })

router.delete("/:usersid", function (req, res) {
    const user = users.find(use => use.id === +req.params.usersid);
    res.status(204);
    res.end()
    }); 



module.exports = router 