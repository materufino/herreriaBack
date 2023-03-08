const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const obj = {
        user_id: user.id,
        user_rango: user.rango,
        exp: dayjs().add(90, 'days').unix()
    }
    return jwt.sign(obj, 'nisi electi praeteribit');
}

module.exports = {
    createToken
}