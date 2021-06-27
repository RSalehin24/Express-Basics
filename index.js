
require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}. `);
});