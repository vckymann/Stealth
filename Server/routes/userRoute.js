const getUserInfo = async (req, res) => {
    const userEmail = req.body.email;
    const client = await req.pool.connect();
    try {
        const query = `SELECT users.id AS user_id, carts.id AS cart_id FROM users INNER JOIN carts ON users.id = carts.user_id WHERE users.email = $1`;
        const result = await client.query(query, [userEmail]);
        if (result.rows.length > 0) {
            const { user_id, cart_id } = result.rows[0];
            res.json({ user_id, cart_id });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
};

module.exports = { getUserInfo }