const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/JokesDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connection to the JokesDB is established")
    })
    .catch((err) => {
        console.log('Something went wrong when connecting to JokesDB',err)
    });