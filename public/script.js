const dataContainer = document.getElementById('data');
const addForm = document.getElementById('addForm');

    function fetchData() {
        fetch('/data')
            .then(response => response.json())
            .then(data => {
                dataContainer.innerHTML = "<h2>Datos:</h2>";
                data.forEach((item, index) => {
                    dataContainer.innerHTML += `
                        <p><strong>${item.name}</strong>, Edad: ${item.age} años 
                        <button onclick="editData(${index}, '${item.name}', ${item.age})">Editar</button>
                        <button onclick="deleteData(${index})">Eliminar</button></p>`;
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }


    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
    
        if (name && age) {
            fetch('/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, age: parseInt(age) })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                fetchData(); // Actualizar datos en la página después de agregar
            })
            .catch(error => console.error('Error adding data:', error));
        } else {
            console.log('Por favor, ingrese un nombre y una edad válida.');
        }
    });

    function editData(index, newName, newAge) {
        const updatedName = prompt('Nuevo nombre:', newName);
        const updatedAge = prompt('Nueva edad:', newAge);
    
        if (updatedName !== null && updatedAge !== null) {
            fetch(`/data/${index}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: updatedName, age: parseInt(updatedAge) })
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
    