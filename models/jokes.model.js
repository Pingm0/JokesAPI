const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema ({
    joke: {
        type: String,
        required:[true,"Please provide a joker its requierd"]
    },
    rating: {
        type: Number,
        required:[true,"Please rate your joke bertween 0 and 5"],
        enum: [
            0,1,2,3,4,5
        ]
    }
},{timeseries:true});

const Joke = mongoose.model('Joke',JokeSchema)

module.exports = Joke;