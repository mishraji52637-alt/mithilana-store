const express = require('express');
const app = express();

// Simple CORS (No extra module needed)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());

app.post('/api/orders', (req, res) => {
    console.log("New Order Received:", req.body);
    res.status(200).json({ success: true, message: "Order Placed Successfully!" });
});

app.get('/', (req, res) => {
    res.send("Mithilana Store API is running live!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
