const router = require('express').Router();

const { getAll, getById, getByUserId, create, update, deleteById } = require('../../models/client.model');

//GET

router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:clientId', async (req, res) => {
    const { clientId } = req.params;

    try {
        const [result] = await getById(clientId);
        if (result.length === 0) {
            res.json({ fatal: 'No se ha encontrado el cliente' });
        }
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const [result] = await getByUserId(userId);

        if (result.length === 0) {
            res.json({ fatal: 'No se han encontrado clientes asignados al herrero especificado' });
        }

        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

//POST

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);

        const [client] = await getById(result.insertId);

        res.json(client[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
});

//PUT

router.put('/:clientId', async (req, res) => {
    const { clientId } = req.params;

    try {
        const [result] = await update(clientId, req.body);

        const [client] = await getById(clientId);

        res.json(client[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

//DELETE

router.delete('/:clientId', async (req, res) => {
    const { clientId } = req.params;

    try {
        const [result] = await deleteById(clientId);

        res.json({ message: 'Se ha eliminado el cliente seleccionado' });

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;