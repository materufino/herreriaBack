//GET

const { TokenExpiredError } = require("jsonwebtoken");

const getAll = () => {
    return db.query('select * from orders');
}

const getById = (orderId) => {
    return db.query('select * from orders where id=?', [orderId])
}

const getByStatus = (task, status) => {
    return db.query('select * from orders where task=? and order_status = ?', [task, status]);
}

const getByUser = (userId) => {
    return db.query('select * from orders where user_id=?', [userId])
}

const getUserStatus = (userId, status) => {
    return db.query('select * from orders where user_id=? and order_status=?', [userId, status])
}

//POST

const create = ({ task, product_type, product_subtype, order_status, price, obs, client_id, user_id, sub_task1, sub_task2, sub_task3, product_id }) => {
    return db.query(
        'insert into orders (task, product_type, product_subtype, order_status, price, obs, client_id, user_id, sub_task1, sub_task2, sub_task3, product_id) values (?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?)',
        [task, product_type, product_subtype, order_status, price, obs, client_id, user_id, sub_task1, sub_task2, sub_task3, product_id]
    );
}


//PUT

const update = (orderId, { task, product_type, product_subtype, order_status, price, obs, client_id, user_id, sub_task1, sub_task2, sub_task3, product_id }) => {
    return db.query(
        'update orders set task= ?, product_type= ?, product_subtype= ?, order_status= ?, price= ?, obs= ?, client_id= ?, user_id= ?, sub_task1= ?, sub_task2= ?, sub_task3= ?, product_id=? where id = ?',
        [task, product_type, product_subtype, order_status, price, obs, client_id, user_id, sub_task1, sub_task2, sub_task3, product_id, orderId]
    )
}

//DELETE

const deleteById = (orderId) => {
    return db.query('delete from orders where id = ?', [orderId]);
}

module.exports = {
    getAll, getById, getByStatus, getByUser, getUserStatus, create, update, deleteById
}