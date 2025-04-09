const db = require('../db');

class UserDAO {
  async save(user) {
    const sql = 'INSERT INTO users (name, email, phone, age) VALUES (?, ?, ?, ?)';
    const [result] = await db.execute(sql, [user.name, user.email, user.phone, user.age]);
    return result.insertId;
  }
}

module.exports = new UserDAO();
