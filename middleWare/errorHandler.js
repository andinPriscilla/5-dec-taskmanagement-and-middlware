function errorHandler (error,req,res,next) {
    console.log(error)
    res.status(500).send("there is an error please check again").end()
}

module.exports = errorHandler