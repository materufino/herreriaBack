const router = require('express').Router();

const { getAll, getById, getByStatus, getByUser, getUserStatus, create, update, deleteById } = require('../../models/order.model');

//GET

router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
});

router.get('/:task/:status', async (req, res) => {
    const { task, status } = req.params;
    try {
        const [result] = await getByStatus(task, status)
        if (result.lenght === 0) {
            res.json({ fatal: 'No se ha encontrado ningún pedido' });
        }
    }
    catch (error) {
        res.json({ fatal: error.message });
    }
})

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const [result] = await getByUser(userId)
        if (result.length === 0) {
            res.json({ fatal: 'No se han encontrado pedidos de este herrero' })
        }
    }
    catch (error) {
        res.json({ fatal: error.message })
    };
})
router.get('/:userId/:status', async (req, res) => {
    const { userId, status } = req.params;
    try {
        const [result] = await getUserStatus(userId, status)
        if (result.length === 0) {
            res.json({ fatal: `No se han encontrado pedidos ${status} de este herrero` })
        }
    }
    catch (error) {
        res.json({ fatal: error.message })
    };
})

//POST

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [order] = await getById(result.insertId);

        res.json(order[0])
    }
    catch (error) {
        res.json({ fatal: error.message });
    }
});

//PUT

router.put('/:orderId', async (req, res) => {
    const { orderId } = req.params;
    try {
        const [result] = await update(orderId, req.body)
        const [order] = await getById(orderId)
        res.json(order[0]);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

//DELETE

router.delete('/:orderId', async (req, res) => {
    const { orderId } = req.params
    try {
        const [result] = await deleteById(orderId)
        res.json({ message: 'Se ha eliminado el pedido seleccionado' });
    }
    catch (error) {
        res.json({ fatal: error.message })
    };
})

module.exports = router;