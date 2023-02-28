const router = require('express').Router();

const { checkToken, checkAdmin, checkRole } = require('../helpers/middlewares');

router.use('/clients', checkToken, checkAdmin, require('./api/clients'));

router.use('/users', require('./api/users'));
router.use('/products', require('./api/products'));
router.use('/orders', require('./api/orders'));


module.exports = router;