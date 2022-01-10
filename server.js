require("dotenv").config();
const db = require('./library/database')

const Product = require("./models/Product")

const categories = require('./routes/categories')
const tasks = require('./routes/tasks')
const teams = require('./routes/teams')
const users = require('./routes/users')

const errorHandler = require('./middleWare/errorHandler')



const express = require('express');

const server = express();

const port = process.env.PORT

server.listen(port, () => console.log(`server running on ${port}`))



const loggingMiddleware = require("./middleWare/loggingMiddleware")
server.use(express.json())
server.use(loggingMiddleware)


server.use("/categories",categories)
server.use("/tasks", tasks)
server.use("/users", users)
server.use("/teams", teams)


server.post("/product",async (req, res,next) =>{
    try {
        const new_product = await Product.create_product("product_name",654)
        res.json(new_product)
    } catch (error) {
        next(error)
        
    }
})
/* server.use(require("../middleWare/errorHandler")) //one line importing and using at the same time */

server.use((req, res, next) => res.status(404).end("please check what you send"))
/* 
server.use(errorHandler) */