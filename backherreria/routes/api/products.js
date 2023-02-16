const router = require('express').Router();

const { getAll, getById, getByType, getBySubtype, create, update, deleteById } = require('../../models/product.model');

//GET

router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const [result] = await getById(productId);
        if (result.length === 0) {
            res.json({ fatal: 'No se ha encontrado el producto' });
        }
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});
router.get('/:type', async (req, res) => {
    const { type } = req.params;

    try {
        const [result] = await getByType(type);
        if (result.length === 0) {
            res.json({ fatal: 'No se ha encontrado el producto' });
        }
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});
router.get('/:subtype', async (req, res) => {
    const { subtype } = req.params;

    try {
        const [result] = await getBySubtype(subtype);
        if (result.length === 0) {
            res.json({ fatal: 'No se ha encontrado el producto' });
        }
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

//POST

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);

        const [product] = await getById(result.insertId);

        res.json(product[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
});

//PUT

router.put('/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const [result] = await update(productId, req.body);

        const [product] = await getById(productId);

        res.json(product[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

//DELETE

router.delete('/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const [result] = await deleteById(productId);

        res.json({ message: 'Se ha eliminado el producto seleccionado' });

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;