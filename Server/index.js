const express = require("express");
const cors = require('cors');
const { Pool } = require("pg");
const { getProducts } = require("./routes/productRoute");
const { createCart,addProductsToCart, getCartItems, updateCartItems, deleteCartItems } = require("./routes/cartRoute");
const { getUserInfo } = require("./routes/userRoute");

const app = express();
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString: connectionString,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 4000,
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to add database pool to request object
app.use((req, res, next) => {
    req.pool = pool;
    next();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// POST user info
app.post("/user-Info", getUserInfo);

// GET all products
app.get("/products", getProducts);

// POST create user and cart
app.post("/create-user-cart", createCart);

// GET cart items
app.post("/cart-items", getCartItems);

// POST add to cart
app.post("/add-to-cart", addProductsToCart);

// PUT update cart item
app.put("/update-cart-item", updateCartItems);


// DELETE item from cart
app.delete("/remove-from-cart", deleteCartItems);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
