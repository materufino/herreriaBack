//GET

const { TokenExpiredError } = require("jsonwebtoken");

const getAll = () => {
    return db.query('select * from orders');
}

const getById = (orderId) => {
    return db.query('select * from orders where id=?', [orderId])
}

const getByTaskStatus = (task, status) => {
    return db.query('select * from orders where task=? and order_status = ?', [task, status]);
}

const getByTask = (task) => {
    return db.query('select * from orders where task=?', [task]);
}

const getByStatus = (status) => {
    return db.query('select * from orders where order_status=?', [status]);
}

const getByUser = (userId) => {
    return db.query('select * from orders where user_id=?', [userId])
}

const getUserStatus = (userId, status) => {
    return db.query('select * from orders where user_id=? and order_status=?', [userId, status])
}

//POST

const create = ({ task, product_type, product_subtype, order_status, start_date, end_date, price, obs, client_id, user_id, sub_task1, sub_task2, sub_task3, sub_task1_status, sub_task2_status, sub_task3_status }) => {
    return db.query(
        'insert into orders (task, product_type, product_subtype, order_status, start_date, end_date, price, obs, client_id, user_id, sub_task1, sub_task2, sub_task3, sub_task1_status, sub_task2_status, sub_task3_status) values (?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [task, product_type, product_subtype, order_status, start_date, end_date, price, obs, client_id, user_id, sub_task1, sub_task2, sub_task3, sub_task1_status, sub_task2_status, sub_task3_status]
    );
}


//PUT

const update = (orderId, { task, product_type, product_subtype, order_status, start_date, end_date, price, obs, client_id, user_id, sub_task1, sub_task2, sub_task3, sub_task1_status, sub_task2_status, sub_task3_status }) => {
    return db.query(
        'update orders set task=?, product_type=?, product_subtype=?, order_status=?, start_date=?, end_date=?, price=?, obs=?, client_id=?, user_id=?, sub_task1=?, sub_task2=?, sub_task3=?, sub_task1_status=?, sub_task2_status=?, sub_task3_status=? where id =?',
        [task, product_type, product_subtype, order_status, start_date, end_date, price, obs, client_id, user_id, sub_task1, sub_task2, sub_task3, sub_task1_status, sub_task2_status, sub_task3_status, orderId]
    )
}

//DELETE

const deleteById = (orderId) => {
    return db.query('delete from orders where id = ?', [orderId]);
}

module.exports = {
    getAll, getById, getByTask, getByStatus, getByTaskStatus, getByUser, getUserStatus, create, update, deleteById
}