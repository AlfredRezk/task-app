const router = require('express').Router()
const ctrl = require('../controllers/task')

router.get('/', ctrl.getTasks)
router.get('/add', ctrl.getAdd)
router.post('/add', ctrl.postAdd)
router.post('/edit', ctrl.postEdit)
router.get('/edit/:id', ctrl.getEdit)
router.get('/delete/:id', ctrl.getDelete)
router.get('/toggle/:id', ctrl.getToggleComplete)


module.exports = router;