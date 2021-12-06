
const categories = require('./routes/categories')
const tasks = require('./routes/tasks')
const teams = require('./routes/teams')
const users = require('./routes/users')



require ("dotenv").config();
const express = require('express');

const server = express();

const port = process.env.PORT

server.listen(port, () => console.log(`server running on ${port}`))



const loggingMiddleware = require("./middleWare/loggingMiddleware")

server.use(loggingMiddleware)
server.use(express.json())

server.use("/categories",categories)
server.use("/tasks", tasks)
server.use("/users", users)
server.use("/teams", teams)