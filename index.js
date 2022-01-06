const express = require('express');
const app = express();

// * Dependencias

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`conectado online na porta ${PORT}`);
})

app.get('/',(req, res) =>{
    res.render('index');
})