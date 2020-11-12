const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A dog must have a name!"],
        minlength: [3, "Name must be at least 3 characters!"],
        maxlength: [20, "Name must be under 20 characters!"]
    },
    breed: {
        type: String,
        required: [true, "Breed is required!"]
    },
    age: {
        type: Number,
        required: [true, "Dog must have an age!"],
        min: [1, "Dog must be at least 1 year old!"]
    },
    favMove: {
        type: String,
        default: ""
    },
    isLit: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports.Dog = mongoose.model('Dog', DogSchema)