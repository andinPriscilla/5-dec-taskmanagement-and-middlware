var express = require('express')
var router = express.Router() 


 var categories = [
    {id: 1, name: "pris"},
    {id: 2, name: "Mohannad"},
    {id: 3, name: "Gabo"}
] 
router.get('/',(req, res,next) => {
    try {
        /* console.log("get category") */
        res.send(categories) 
    } catch (error) {
        next(error)
    }
   
})

router.get("/:categorieId",function(req, res, next) {
    try {
        const categorie = categories.find(category => category.id === +req.params.categorieId) 
    res.send(categorie)
    } catch (error) {
        next(error)
    }
    
})

router.post("/", (req, res, next) => {
    try {
        res.send("Success!!!!!")
    } catch (error) {
        next(error)
    }
    
    })

router.delete("/:id", function (req, res,next) {
    try {
         const category = categories.find((c) => c.id === +req.params.id);
    res.status(204);
    res.end()
    } catch (error) {
        next(error)
    }
   
    }); 

module.exports = router 