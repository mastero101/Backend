const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5600;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/sendMessage', (req, res) => {
    const message = req.body.message;
    axios.post('https://boldaiapi.castro-alejandro17.workers.dev', { message: message })
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            res.status(500).json({ error: "Error al enviar el mensaje" });
        });
});

app.use((req, res) => {
    res.status(404).send("Endpoint no encontrado");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});