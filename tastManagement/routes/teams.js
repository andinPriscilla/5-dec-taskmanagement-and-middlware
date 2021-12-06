var express = require('express')
var router = express.Router() 

const teams = [
    {id:1, colour:"red"},
    {id:1, colour:"blue"},
    {id:1, colour:"yellow"},
    {id:1, colour:"purple"},
    {id:1, colour:"black"}
]

router.get("/", function (req, res) {
    res.send(teams)
})

router.get("/:teamsId", function (req, res) {
    const team = tasks.find((colour) => colour.id === +req.params.teamsId)
    res.send(team)
})

router.post("/", function (req, res){
    res.send("these are great teams")
})


router.delete("/:teamsid", function (req, res) {
    const team = tasks.find((t) => t.id === +req.params.teamsid);
    res.status(204);
    res.end()
    }); 


module.exports = router 