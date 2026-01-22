const express = require('express');
const app = express();

const testingRouter = require('./router/firstRouter.js');
app.use('/', testingRouter);

const checkingRouter = require('./router/firstRouter.js')
app.use('/', checkingRouter);

app.get("/get-data", (req, res) => {
    console.log("Responding......");
});

app.listen(2640, () => {
    console.log("Server is running on port 2640");
});