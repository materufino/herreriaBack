//GET

const getAll = () => {
    return db.query('select * from products');
}

const getById = (productId) => {
    return db.query('select * from products where id = ?', [productId]);
}
const getByType = (productType) => {
    return db.query('select * from products where type = ?', [productType]);
}
const getBySubtype = (productSubtype) => {
    return db.query('select * from products where subtype = ?', [productSubtype]);
}

//POST

const create = ({ type, subtype, price, lead_time }) => {
    return db.query(
        'insert into products (type, subtype, price, lead_time  ) values (?, ?, ?, ?)',
        [type, subtype, price, lead_time]
    );
}



//PUT

const update = (productId, { type, subtype, price, lead_time }) => {
    return db.query(
        'update products set type=?, subtype=?, price=?, lead_time=?   where id = ?',
        [type, subtype, price, lead_time, productId]
    )
}

//DELETE

const deleteById = (productId) => {
    return db.query('delete from products where id = ?', [productId]);
}

module.exports = {
    getAll, getById, getByType, getBySubtype, create, update, deleteById
}