const dataContainer = document.getElementById('data');
const addForm = document.getElementById('addForm');

function fetchData() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            dataContainer.innerHTML = "<h2>Datos:</h2>";
            data.forEach((item, index) => {
                dataContainer.innerHTML += `
                    <p><strong>${item.name}</strong>, Edad: ${item.age} años, Matrícula: ${item.matricula}, Número: ${item.numero}
                    <button onclick="editData(${index}, '${item.name}', ${item.age}, '${item.matricula}', '${item.numero}')">Editar</button>
                    <button onclick="deleteData(${index})">Eliminar</button></p>`;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

addForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const matricula = document.getElementById('matricula').value;
    const numero = document.getElementById('numero').value;

    // Validación para asegurarse de que name y matricula contengan solo letras y age y numero contengan solo números
    if (/[^A-Za-z\s]/.test(name) || /[^0-9]/.test(age) || /[^0-9]/.test(matricula) || /[^0-9]/.test(numero)) {
        // Mostrar un mensaje de error si los datos no cumplen con los requisitos
        alert('Por favor, verifique que los campos estén completos y correctamente.');
        return;
    }

    if (name && age && matricula && numero) {
        fetch('/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, age: parseInt(age), matricula: matricula, numero: numero })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                fetchData();
            })
            .catch(error => console.error('Error adding data:', error));
    } else {
        // Mostrar un mensaje de error si falta información
        alert('Por favor, complete todos los campos.');
    }
});


function editData(index, newName, newAge, newMatricula, newNumero) {
    const updatedName = prompt('Nuevo nombre:', newName);
    const updatedAge = prompt('Nueva edad:', newAge);
    const updatedMatricula = prompt('Nueva matrícula:', newMatricula);
    const updatedNumero = prompt('Nuevo número:', newNumero);

    if (updatedName !== null && updatedAge !== null && updatedMatricula !== null && updatedNumero !== null) {
        fetch(`/data/${index}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: updatedName, age: parseInt(updatedAge), matricula: updatedMatricula, numero: updatedNumero })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                fetchData();
            })
            .catch(error => console.error('Error editing data:', error));
    }
}

function deleteData(index) {
    const confirmation = confirm('¿Estás seguro de que deseas eliminar este elemento?');

    if (confirmation) {
        fetch(`/data/${index}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                fetchData();
            })
            .catch(error => console.error('Error deleting data:', error));
    }
}

fetchData();