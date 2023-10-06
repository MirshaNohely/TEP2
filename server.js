const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');
const fs = require('fs');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const dataFilePath = 'data.json';

// Middleware para leer el archivo data.json
function readDataFile(req, res, next) {
    try {
        const rawData = fs.readFileSync(dataFilePath);
        req.data = JSON.parse(rawData);
        next();
    } catch (error) {
        if (error.code === 'ENOENT') {
            // El archivo no existe, inicializarlo con un array vacío
            fs.writeFileSync(dataFilePath, '[]');
            req.data = [];
            next();
        } else {
            console.error(error);
            res.status(500).json({ error: 'Error al leer los datos' });
        }
    }
}

// Ruta para obtener todos los datos
app.get('/data', readDataFile, (req, res) => {
    res.json(req.data);
});

// Ruta para agregar nuevos datos
app.post('/data', readDataFile, (req, res) => {
    const { name, age, matricula, numero } = req.body;
    req.data.push({ name, age, matricula, numero });
    fs.writeFileSync(dataFilePath, JSON.stringify(req.data, null, 2));
    res.json({ message: 'Data added successfully' });
});

// Ruta para actualizar datos por índice
app.put('/data/:index', readDataFile, (req, res) => {
    const { index } = req.params;
    const { name, age, matricula, numero } = req.body;
    
    if (index >= 0 && index < req.data.length) {
        req.data[index] = { name, age, matricula, numero };
        fs.writeFileSync(dataFilePath, JSON.stringify(req.data, null, 2));
        res.json({ message: 'Data updated successfully' });
    } else {
        res.status(400).json({ error: 'Invalid index' });
    }
});

// Ruta para eliminar datos por índice
app.delete('/data/:index', readDataFile, (req, res) => {
    const { index } = req.params;
    
    if (index >= 0 && index < req.data.length) {
        req.data.splice(index, 1);
        fs.writeFileSync(dataFilePath, JSON.stringify(req.data, null, 2));
        res.json({ message: 'Data deleted successfully' });
    } else {
        res.status(400).json({ error: 'Invalid index' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
