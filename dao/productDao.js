const db = require('../db');

class ProductDAO {
  async save(product) {
    const sql = 'INSERT INTO products (name, price) VALUES (?, ?)';
    const [result] = await db.execute(sql, [product.name, product.price]);
    return result.insertId;
  }
}
module.exports = new ProductDAO();
