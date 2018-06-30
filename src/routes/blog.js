const express = require('express')
const contr = require('../controllers/blogs')
const router = express.Router()

router.get('/', contr.getAll)
router.get('/:id', contr.getOne)
router.post('/', contr.create)
router.put('/:id', contr.update)
router.delete('/:id', contr.remove)

module.exports = router
