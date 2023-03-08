const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const obj = {
        user_id: user.id,
        user_name: user.name,
        user_surname: user.surname,
        username: user.username,
        user_rango: user.rango,
        user_category: user.category,
        exp: dayjs().add(90, 'days').unix()
    }
    return jwt.sign(obj, 'nisi electi praeteribit');
}

module.exports = {
    createToken
}