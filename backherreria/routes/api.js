const router = require('express').Router();

router.use('/clients', require('./api/clients'));

router.use('/users', require('./api/users'));
router.use('/products', require('./api/products'));
router.use('/orders', require('./api/orders'));


module.exports = router;