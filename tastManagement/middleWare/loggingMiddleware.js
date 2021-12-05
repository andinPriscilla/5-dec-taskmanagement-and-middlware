
function loggingMiddleware(req, res, next) {
    console.log("you  are in the middle of no where")
    next()
}









module.exports = loggingMiddleware