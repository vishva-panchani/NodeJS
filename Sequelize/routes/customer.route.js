const express = require('express');
const Controller = require('../controllers/customer.controller');
const Validation = require('./../validations/customer.validation')

// Route Instance
const router = express.Router();
router.get('/customers', Controller.index);
router.get('/customer/:id', Validation.show, Controller.show);
router.post('/customer', Controller.store);
router.put('/customer', Controller.update);
router.delete('/customer', Controller.destroy);

module.exports = router;