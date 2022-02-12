const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/jokes.routes")(app);









app.listen(8000, () => {console.log("you aer connected to the JokesAPI server on port 8000")});