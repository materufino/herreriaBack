//GET

const getAll = () => {
    return db.query('select * from clients');
}

const getById = (clientId) => {
    return db.query('select * from clients where id = ?', [clientId]);
}

//POST

const create = ({ name, surname }) => {
    return db.query(
        'insert into clients (name, surname) values (?, ?)',
        [name, surname]
    );
}



//PUT

const update = (clientId, { name, surname, address, birthdate, email, age }) => {
    return db.query(
        'update clients set name=?, surname=?, address=?, birthdate=?, email=?,age=?  where id = ?',
        [name, surname, address, birthdate, email, age, clientId]
    )
}

//DELETE

const deleteById = (clientId) => {
    return db.query('delete from clients where id = ?', [clientId]);
}

module.exports = {
    getAll, getById, create, update, deleteById
}