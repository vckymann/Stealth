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


app.use((req, res, next) => {
    req.pool = pool;
    next();
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.post("/user-Info", getUserInfo);


app.get("/products", getProducts);

app.post("/create-user-cart", createCart);


app.post("/cart-items", getCartItems);

app.post("/add-to-cart", addProductsToCart);

app.put("/update-cart-item", updateCartItems);

app.delete("/remove-from-cart", deleteCartItems);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
