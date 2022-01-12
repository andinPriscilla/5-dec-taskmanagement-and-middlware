const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userName:{
        type: String,
        require:true,
    },
    email: {
        type: String,
        require:true,
        unique: true,
    },
    age: {
        type: Number,
        require:true,
        validate: v => (v <= 100),
    },
    password: {
        type: String,
        require:true,
    }
})

const User = mongoose.connection.model('User',schema);

async function createUser({userName,email,age,password}) {
    const newUser = new User({
        userName,
        email,
        age,
        password,
    })
    return await newUser.save()
}


async function readUser() {
    return await User.find()
}


async function updateUser() {
    return await User.find()
}

async function deleteUser() {
    return await User.find()
}


module.exports = {createUser,updateUser,deleteUser,readUser}