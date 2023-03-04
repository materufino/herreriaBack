//GET

const getAll = () => {
    return db.query('select * from users');
}
const getByUsername = (username) => {
    return db.query('select * from users where username = ?', [username]);
}
const getById = (userId) => {
    return db.query('select * from users where id = ?', [userId]);
}
const getByRange = (userRange) => {
    return db.query('select * from users where rango = ?', [userRange]);
}
const getByCategory = (category) => {
    return db.query('select * from users where category = ?', [category]);
}

//POST
const create = async ({ name, surname, rango, password, username, category }) => {
    return await db.query(
        'insert into users (name, surname, rango, password,username,category) values (?,?, ?, ?, ?,?)',
        [name, surname, rango, password, username, category]
    )
}


//PUT

const update = (userId, { name, surname, rango, password, username, category }) => {
    return db.query(
        'update users set name=?, surname=?, rango=?, password=?, username=?, category=?  where id = ?',
        [name, surname, rango, password, username, category, userId]
    )
}

//DELETE

const deleteById = (userId) => {
    return db.query('delete from users where id = ?', [userId]);
}

module.exports = {
    getAll, getById, getByRange, getByCategory, getByUsername, create, update, deleteById
}