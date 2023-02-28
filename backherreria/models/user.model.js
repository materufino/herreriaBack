//GET

const getAll = () => {
    return db.query('select * from users');
}
const getByEmail = (email) => {
    return db.query('select * from users where email = ?', [email]);
}
const getById = (userId) => {
    return db.query('select * from users where id = ?', [userId]);
}
const getByRange = (userRange) => {
    return db.query('select * from users where range = ?', [userRange]);
}
const getByGuild = (userGuild) => {
    return db.query('select * from users where guild = ?', [userGuild]);
}

//POST

const create = ({ username, surname, range, guild, email, password }) => {
    return db.query(
        'insert into users (username, surname, range, guild, email, password) values (?, ?, ?, ?, ?, ?)',
        [username, surname, range, guild, email, password]
    )
}


//PUT

const update = (userId, { name, surname, range, guild, email, password }) => {
    return db.query(
        'update users set name=?, surname=?,range=?,guild=?,email=?,password=?  where id = ?',
        [name, surname, range, guild, userId, email, password]
    )
}

//DELETE

const deleteById = (userId) => {
    return db.query('delete from users where id = ?', [userId]);
}

module.exports = {
    getAll, getById, getByRange, getByGuild, getByEmail, create, update, deleteById
}