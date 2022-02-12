const JokesController = require('../controllers/jokes.controllers')

module.exports = (app) => {
    app.get('/api/jokes',JokesController.findAllJokes);
    app.post('/api/jokes',JokesController.createNewJoke);
    app.get('/api/jokes/:id',JokesController.findOneJoke);
    app.delete('/api/jokes/:id',JokesController.deleteOneJoke);
    app.put('/api/jokes/:id',JokesController.updateOneJoke);




}