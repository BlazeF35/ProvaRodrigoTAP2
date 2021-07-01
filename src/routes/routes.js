const routes = require('express').Router()

const BillsController = require('../controllers/Controller')

routes.post('/api/v1/bills', BillsController.create)
routes.get('/api/v1/bills', BillsController.listCustomer)
routes.delete('/api/v1/bills/:id', BillsController.delete)

module.exports = routes