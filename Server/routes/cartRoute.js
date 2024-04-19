const createCart = async (req, res) => {
    const { name, email } = req.body;
    const client = await req.pool.connect();
    try {
        const query1 = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id";
        const query2 = "INSERT INTO carts (user_id) VALUES ($1)"

        const result = await client.query(query1, [name, email]);
        const userId = result.rows[0].id;

        await client.query(query2, [userId]);

        res.json({ userId });

    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

const getCartItems = async (req, res) => {
    const userId = req.body.userId;
    const client = await req.pool.connect();
    try {
        const query = `SELECT 
                products.id AS product_id,
                products.name AS product,
                products.price,
                products.images,
                cart_items.quantity,
                (products.price * cart_items.quantity) AS total
            FROM 
                cart_items
            JOIN 
                products ON cart_items.product_id = products.id
            WHERE 
                cart_items.cart_id = (SELECT id FROM carts WHERE user_id = $1)
            ORDER BY cart_items.id DESC`;

        const result = await client.query(query, [userId]);

        res.json(result.rows);
    } catch (error) {

        throw error;
    } finally {

        client.release();
    }
}

const addProductsToCart = async (req, res) => {
        const { userId, productId, quantity } = req.body;
        const client = await req.pool.connect();
        try {
            const query1 = "SELECT * FROM cart_items WHERE cart_id = (SELECT id FROM carts WHERE user_id = $1) AND product_id = $2";
            const query2 = `
            INSERT INTO cart_items (cart_id, product_id, quantity)
            VALUES ((SELECT id FROM carts WHERE user_id = $1), $2, $3)`

            const result1 = await client.query(query1, [userId, productId]);
            if (result1.rows.length > 0) {
                 return res.json({ success: false, message: "Product already in cart" });            
            } else {
                const result = await client.query(query2, [userId, productId, quantity]);
               return res.json({ success: true, message: "Product added to cart successfully" });
            }
        } catch (error) {

            throw error;
        } finally {

            client.release();
        }
}

const updateCartItems = async (req, res) => {
    const { cartId, productId, quantity } = req.body;
    const client = await req.pool.connect();
    try {
        const query = "UPDATE cart_items SET quantity = $1 WHERE cart_id = $2 AND product_id = $3";
        await client.query(query, [quantity, cartId, productId]);

        res.json({ success: true, message: "Cart updated successfully" });
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}


const deleteCartItems =  async (req, res) => {
    const { cartId, productId } = req.body;
    const client = await req.pool.connect();
    try {
        const query = "DELETE FROM cart_items WHERE cart_id = $1 AND product_id = $2";
        await client.query(query, [cartId, productId]);
        res.status(200).json({ message: "Item deleted from the cart successfully" });
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

module.exports = { createCart, getCartItems, addProductsToCart, updateCartItems, deleteCartItems };