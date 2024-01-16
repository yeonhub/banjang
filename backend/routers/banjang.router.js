const express = require('express')
const { getBanjangItem, getBanjangItemASC } = require('../controllers/banjang.controllers')
const banjangRouter = express.Router()

banjangRouter.get('/api/getBanjangItem', getBanjangItem)
banjangRouter.get('/api/getBanjangItemASC', getBanjangItemASC)


module.exports = banjangRouter