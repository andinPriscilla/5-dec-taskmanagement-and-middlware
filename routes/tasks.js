var express = require('express')
var router = express.Router() 
var sanitizeHtml = require('sanitize-html')

const tasks = [
    {id:1, taskname: "washing"},
    {id:2, taskname: "cleaning"}, 
    {id:3, taskname: "cooking"}, 
]

router.get("/",(req, res,next) =>{
    try {
        res.send(tasks)  
    } catch (error) {
        next(error)
    }
  
})

router.get("/:tasksId",(req, res, next) => {
    try {
         // + converts a string to number (in this case is the id)
    const task = tasks.find((item) => item.id === +req.params.tasksId)
    res.send(task)
    } catch (error) {
        next(error)
    }
   
})

router.post("/", (req, res,next) => {
    try {
        if(!req.body.description) return res.status(400).json("missing description !!!!")
        if(!req.body.dueDate) return res.status(400).json("Date missing !!")
        if(!req.body.id) return res.status(400).json("No id !!!!")
        const sanitize = sanitizeHtml(
            req.body.description,{allowedTags:[]}
        )
        res.json("no html allowed here")
      res.status(201).send(req.body) 
        
    } catch (error) {
        next(error)
    }
    
})


router.delete("/:tasksid",(req, res,next) => {
    try {
        const task = tasks.find((t) => t.id === +req.params.tasksid);
    res.status(204);
    res.end()
    } catch (error) {
        next(error)
    }
    
    }); 



module.exports = router 