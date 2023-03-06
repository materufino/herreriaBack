//GET

const getAll = () => {
    return db.query('select * from clients');
}

const getById = (clientId) => {
    return db.query('select * from clients where id = ?', [clientId]);
}

const getByUserId = (userId) => {
    return db.query('select * from clients where user_id=?', [userId]);
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
    getAll, getById, getByUserId, create, update, deleteById
}