const router = require('express').Router();

const bcrypt = require('bcryptjs');

const { createToken } = require('../../helpers/utils');
const { getAll, getById, getByRange, getByGuild, getByEmail, create, update, deleteById } = require('../../models/user.model');

router.post('/register', async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 5);

        const [result] = await create(req.body);
        const [user] = await getById(result.insertId)
        res.json(user);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/login', async (req, res) => {

    const [users] = await getByEmail(req.body.email);
    if (users.length === 0) {
        return res.json({ fatal: 'Error usuario y/o contraseña' });
    }

    const user = users[0];

    const same = bcrypt.compareSync(req.body.password, user.password);
    if (!same) {
        return res.json({ fatal: 'Error usuario y/o contraseña' });
    }

    res.json({
        success: 'Bienvenido' + ' ' + user.username,
        token: createToken(user)
    });
});

//GET

router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const [result] = await getById(userId);
        if (result.length === 0) {
            res.json({ fatal: 'No se ha encontrado el usuario' });
        }
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});
router.get('/:range', async (req, res) => {
    const { range } = req.params;

    try {
        const [result] = await getByRange(range);
        if (result.length === 0) {
            res.json({ fatal: 'No se ha encontrado el rango' });
        }
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});
router.get('/:guild', async (req, res) => {
    const { guild } = req.params;

    try {
        const [result] = await getByGuild(guild);
        if (result.length === 0) {
            res.json({ fatal: 'No se ha encontrado el gremio' });
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

        const [user] = await getById(result.insertId);

        res.json(user[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
});

//PUT

router.put('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const [result] = await update(userId, req.body);

        const [user] = await getById(userId);

        res.json(user[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

//DELETE

router.delete('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const [result] = await deleteById(userId);

        res.json({ message: 'Se ha eliminado el usuario seleccionado' });

    } catch (error) {
        res.json({ fatal: error.message });
    }
});
module.exports = router;