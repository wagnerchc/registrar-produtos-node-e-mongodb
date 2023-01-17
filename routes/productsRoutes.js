const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController.js')

router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
router.get('/remove/:id', ProductController.removeProduct)
router.get('/edit/:id', ProductController.editProduct)
router.post('/edit', ProductController.editProductPost)
router.get('/:id', ProductController.getProduct)
router.get('/', ProductController.showProducts)

module.exports = router