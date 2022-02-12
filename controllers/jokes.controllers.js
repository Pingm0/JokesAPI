const Joke = require('../models/jokes.model')

module.exports = {
    findAllJokes: (req,res) => {
        Joke.find()
            .then((AllJokes) => {
                console.log(AllJokes)
                res.json(AllJokes)
            })
            .catch((err) => {
                console.log("Something went wrong with the find all Jokes")
                res.json({message:"Something went wrong inf Find All Jo",error:err})
            })
    },
    createNewJoke: ((req,res) => {
        Joke.create(req.body)
            .then((newJoke => {
                console.log(newJoke)
                res.json(newJoke)
            }))
            .catch((err) => {
                console.log("something went wrong with adding a new joke")
                res.status(400).json(err)
            })
    }),
    findOneJoke: ((req,res) => {
        Joke.findOne({_id:req.params.id})
            .then((oneJoke) => {
                console.log(oneJoke)
                res.json(oneJoke)
            })
            .catch((err) => {
                console.log('something went wrong with Findeone')
                res.json({message:"Something went wrong with findeOne",error:err})
            })
            
    }),
    deleteOneJoke: ((req,res) => {
        Joke.deleteOne({_id:req.params.id})
            .then((deleteOne) => {
                console.log(deleteOne)
                res.json(deleteOne)
            })
            .catch((err) => {
                console.log('something went wrong with deleteOne')
                res.json({message:"Something went wrong with deleteOne",error:err})
            })
            
    }),
    updateOneJoke: ((req,res) => {
        Joke.findOneAndUpdate({_id:req.params.id},
            req.body,
            {
                new:true,
                runValidators:true
            }
            )
                .then((updateJoke) => {
                    console.log("Joke with Joke updated")
                    res.json(updateJoke)
                })
                .catch((err) => {
                    console.log("something went wrong with your Joke update")
                    res.status(400).json(err)
                })
    })
}