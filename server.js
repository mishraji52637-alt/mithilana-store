const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
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
