const express = require('express');
const path = require('path');
const User = require('./models/user');
const userDao = require('./dao/userDao');
const Product = require('./models/product');
const productDao = require('./dao/productDao');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/api/users', async (req, res) => {
  try {
    const { name, email, phone, age } = req.body;
    const user = new User(name, email, phone, age);
    const id = await userDao.save(user);
    res.send(`User saved with ID: ${id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
  }
});

app.get('/api/users', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM users');
      res.json(rows);
    } catch (err) {
      res.status(500).send('Error fetching users');
    }
  });  

app.post('/api/products', async (req, res) => {
    try {
      const { name, price } = req.body;
      const product = new Product(name, price);
      const id = await productDao.save(product);
      res.send(`Product saved with ID: ${id}`);
    } catch (err) {
      res.status(500).send('Error saving product');
    }
  });

app.listen(PORT, '0.0.0.0',() => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
