//GET

const { TokenExpiredError } = require("jsonwebtoken");

const getAll = () => {
    return db.query('select * from orders');
}

const getByStatus = (status) => {
    return db.query('select * from orders where status = ?', [status]);
}

//POST

const create = ({ task, product_type, product_subtype, status, delivery_date, deadline, price, paid, obs, user_id }) => {
    return db.query(
        'insert into orders (task, product_type, product_subtype, status, delivery_date, deadline, price, paid, obs, user_id) values (?, ?, ?, ?, ?,?, ?, ?, ?, ?)',
        [task, product_type, product_subtype, status, delivery_date, deadline, price, paid, obs, user_id]
    );
}



//PUT

const update = (orderId, { task, product_type, product_subtype, status, delivery_date, deadline, price, paid, obs, user_id }) => {
    return db.query(
        'update orders set task= ?, product_type= ?, product_subtype= ?, status= ?, delivery_date= ?, deadline= ?, price= ?, paid= ?, obs= ?, user_id= ? where id = ?',
        [task, product_type, product_subtype, status, delivery_date, deadline, price, paid, obs, user_id, orderId]
    )
}

//DELETE

const deleteById = (clientId) => {
    return db.query('delete from clients where id = ?', [clientId]);
}

module.exports = {
    getAll, getById, create, update, deleteById
}