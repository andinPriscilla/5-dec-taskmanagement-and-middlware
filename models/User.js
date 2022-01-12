const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
city: {
    type: String
},
postalCode: {
    type: String
},
streetNumber: {
    type: Number
}
})

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
        validate: v => (v >= 18 && v <= 100),
    },
    password: {
        type: String,
        require:true,
    },
    address:{
        type: addressSchema,
    }
});


const User = mongoose.connection.model('User',schema);

async function createUser({userName,email,age,password,address,}) {
    const newUser = new User({
        userName,
        email,
        age,
        password,
        address,
          
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