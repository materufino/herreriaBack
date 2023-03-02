//GET

const { TokenExpiredError } = require("jsonwebtoken");

const getAll = () => {
    return db.query('select * from orders');
}

const getById = (orderId) => {
    return db.query('select * from orders where id=?', [orderId])
}

const getByStatus = (task, status) => {
    return db.query('select * from orders where task=? and status = ?', [task, status]);
}

const getByUser = (userId) => {
    return db.query('select * from orders where user_id=?', [userId])
}

const getUserStatus = (userId, status) => {
    return db.query('select * from orders where user_id=? and status=?', [userId, status])
}

//POST

const create = ({ product_type, product_subtype, task, status, sub_task, sub_task_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, start_date, end_date, delivery_date, deadline, price, paid, obs, user_id }) => {
    return db.query(
        'insert into orders (product_type, product_subtype, task, status, sub_task, sub_task_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, start_date, end_date, delivery_date, deadline, price, paid, obs, user_id) values (?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?)',
        [product_type, product_subtype, task, status, sub_task, sub_task_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, start_date, end_date, delivery_date, deadline, price, paid, obs, user_id]
    );
}

//PUT

const update = (orderId, { product_type, product_subtype, task, status, sub_task, sub_task_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, start_date, end_date, delivery_date, deadline, price, paid, obs, user_id }) => {
    return db.query(
        'update orders set product_type=?, product_subtype=?, task=?, status=?, sub_task=?, sub_task_status=?, sub_task2=?, sub_task2_status=?, sub_task3=?, sub_task3_status=?, start_date=?, end_date=?, delivery_date=?, deadline=?, price=?, paid=?, obs=?, user_id= ? where id = ?',
        [product_type, product_subtype, task, status, sub_task, sub_task_status, sub_task2, sub_task2_status, sub_task3, sub_task3_status, start_date, end_date, delivery_date, deadline, price, paid, obs, user_id, orderId]
    )
}

//DELETE

const deleteById = (orderId) => {
    return db.query('delete from orders where id = ?', [orderId]);
}

module.exports = {
    getAll, getById, getByStatus, getByUser, getUserStatus, create, update, deleteById
}