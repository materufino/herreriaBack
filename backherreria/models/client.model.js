//GET

const getAll = () => {
    return db.query('select * from clients');
}

const getById = (clientId) => {
    return db.query('select * from clients where id = ?', [clientId]);
}

//POST

const create = ({ name, surname, dni }) => {
    return db.query(
        'insert into clients (name, surname,dni) values (?, ?,?)',
        [name, surname, dni]
    );
}



//PUT

const update = (clientId, { name, surname, user_id, dni }) => {
    return db.query(
        'update clients set name=?, surname=?, user_id=?, dni=?  where id = ?',
        [name, surname, user_id, dni, clientId]
    )
}

//DELETE

const deleteById = (clientId) => {
    return db.query('delete from clients where id = ?', [clientId]);
}

module.exports = {
    getAll, getById, create, update, deleteById
}