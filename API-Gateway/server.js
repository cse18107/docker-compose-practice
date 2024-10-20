const express = require('express');
const axios = require('axios')

const app = express();

app.get('/api-gateway', (req, res) => {
    res.status(200).json({
        message: 'reverse proxy'
    })
});

app.get('/ping', (req, res) => {
    res.status(200).json({
        message: 'ping from reverse proxy'
    })
});

app.get('/get-flights', async(req, res) => {
    const response = await axios('http://docker-compose-demo-flights_service-1:3000/flight');
    const data = response;
    console.log(data);
    res.status(200).json({
        message: data.data.message
    })
})
app.get('/book-flight-ticket', async(req, res) => {
    const response = await axios('http://localhost:4000/flight-booking');
    const data = response;
    console.log(data);
    res.status(200).json({
        message: data.data.message
    })
})



app.listen(3001, () => {
    console.log("API gateway Service is working on PORT ->", 3001);
})