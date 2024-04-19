 const getProducts = async (req, res) => {
    const client = await req.pool.connect();
    try {
        const result = await client.query("SELECT * FROM products");
        res.json(result.rows);
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
}

module.exports = { getProducts }  