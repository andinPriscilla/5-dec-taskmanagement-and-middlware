var express = require('express')
var router = express.Router() 

const teams = [
    {id:1, colour:"red"},
    {id:1, colour:"blue"},
    {id:1, colour:"yellow"},
    {id:1, colour:"purple"},
    {id:1, colour:"black"}
]

router.get("/", function (req, res,next) {
    try {
         res.send(teams)
    } catch (error) {
        next(error)
    }
   
})

router.get("/:teamsId", function (req, res,next) {
    try {
        const team = tasks.find((colour) => colour.id === +req.params.teamsId)
    res.send(team)
    } catch (error) {
        next(error)
    }
    
})

router.post("/", function (req, res,next){
    try {
         res.send("these are great teams")
    } catch (error) {
        next(error)
    }
   
})


router.delete("/:teamsid", function (req, res,next) {
    try {
      const team = tasks.find((t) => t.id === +req.params.teamsid);
    res.status(204);
    res.end()  
    } catch (error) {
        next(error)
    }
    
    }); 


module.exports = router 