const User = require('../../db').Product
const route = require('express').Router()

route.get('/', (req, res) => {
    User.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: "could not retreive products"
            })
        })
})

route.post('/', (req, res) => {
    if (isNaN(req.body.price)) {
        return res.status(200).send({ error: 'Not a Valid Number' })
    }
    User.create({
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            price: parseFloat(req.body.price)
        }).then((products) => {
            res.status(201).send(products)
        })
        .catch((err) => {
            res.status(501).send({
                error: "could not add new user"
            })
        })
})

exports = module.exports = route