const router = require('express').Router();

const { checkToken, checkMaster, checkRole } = require('../helpers/middlewares');

router.use('/clients', checkToken, checkMaster, require('./api/clients'));

router.use('/users', require('./api/users'));
router.use('/products', require('./api/products'));


module.exports = router;