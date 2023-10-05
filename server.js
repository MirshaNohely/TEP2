const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/data', (req, res) => {
    try {
        const rawData = fs.readFileSync('data.json');
        const data = JSON.parse(rawData);
        res.json(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // El archivo no existe, inicializarlo con un array vacío
            fs.writeFileSync('data.json', '[]');
            res.json([]); // Devolver un array vacío
        } else {
            console.error(error);
            res.status(500).json({ error: 'Error al leer los datos' });
        }
    }
});

app.post('/data', (req, res) => {
    const { name, age, matricula, numero } = req.body;
    try {
        const rawData = fs.readFileSync('data.json');
        const data = JSON.parse(rawData);
        data.push({ name, age, matricula, numero });
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
        res.json({ message: 'Data added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al agregar datos' });
    }
});

app.put('/data/:index', (req, res) => {
    const index = req.params.index;
    const { name, age, matricula, numero } = req.body;
    try {
        const rawData = fs.readFileSync('data.json');
        const data = JSON.parse(rawData);
        if (index >= 0 && index < data.length) {
            data[index].name = name;
            data[index].age = age;
            data[index].matricula = matricula;
            data[index].numero = numero;
            fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
            res.json({ message: 'Data updated successfully' });
        } else {
            res.status(400).json({ error: 'Invalid index' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar los datos' });
    }
});


app.delete('/data/:index', (req, res) => {
    const index = req.params.index;
    try {
        const rawData = fs.readFileSync('data.json');
        const data = JSON.parse(rawData);
        if (index >= 0 && index < data.length) {
            data.splice(index, 1);
            fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
            res.json({ message: 'Data deleted successfully' });
        } else {
            res.status(400).json({ error: 'Invalid index' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar los datos' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

