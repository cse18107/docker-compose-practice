const express = require('express');

const app = express();

app.get('/flight', (req, res) => {
    res.status(200).json({
        message: 'flights list'
    })
});


app.listen(3000, () => {
    console.log("Flight Service is working on PORT ->", 3000);
})