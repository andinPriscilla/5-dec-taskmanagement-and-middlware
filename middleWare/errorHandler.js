function errorHandler (error,req,res,next) {
    console.log(error)
    res.status(500).end("there is an error please check again")
    
}

module.exports = errorHandler