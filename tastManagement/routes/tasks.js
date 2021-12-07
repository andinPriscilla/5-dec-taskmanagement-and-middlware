var express = require('express')
var router = express.Router() 

const tasks = [
    {id:1, taskname: "washing"},
    {id:2, taskname: "cleaning"}, 
    {id:3, taskname: "cooking"}, 
]

router.get("/",function (req, res,next) {
    try {
        res.send(tasks)  
    } catch (error) {
        next(error)
    }
  
})

router.get("/:tasksId", function (req, res, next) {
    try {
         // + converts a string to number (in this case is the id)
    const task = tasks.find((item) => item.id === +req.params.tasksId)
    res.send(task)
    } catch (error) {
        next(error)
    }
   
})

router.post("/", function (req, res,next){
    try {
         res.send("waw waw waw")
    } catch (error) {
        next(error)
    }
   
})


router.delete("/:tasksid", function (req, res,next) {
    try {
        const task = tasks.find((t) => t.id === +req.params.tasksid);
    res.status(204);
    res.end()
    } catch (error) {
        next(error)
    }
    
    }); 



module.exports = router 