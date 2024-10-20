const express = require('express');

const app = express();

app.get('/flight-booking', (req, res) => {
    res.status(200).json({
        message: 'booking flight ticket'
    })
});


app.listen(4000, () => {
    console.log("Flight Booking Service is working on PORT ->", 4000);
})