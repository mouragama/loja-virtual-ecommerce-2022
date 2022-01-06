const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// * Dependencias
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`conectado online na porta ${PORT}`);
})

app.get('/',(req, res) =>{
    res.json({lael: lael});
})