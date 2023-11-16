
function agregarMenu() {

    var nombreMenu = document.getElementById("nombreMenu").value;

    if (nombreMenu.trim() === "") {
        alert("Por favor, ingrese un nombre válido para el menú.");
        return;
    }

    var table = document.getElementById("menuTable");
    var row = table.insertRow(-1);


    var cell1 = row.insertCell(0);
    cell1.innerHTML = nombreMenu;

    var cell2 = row.insertCell(1);
    cell2.innerHTML = '<button onclick="editarMenu(this)"><i class="bi bi-pencil-square"></i> Editar</button> <button onclick="borrarMenu(this)">Borrar</button>';


    document.getElementById("nombreMenu").value = "";
}

function editarMenu(button) {

    var row = button.parentNode.parentNode;
    var nombreAnterior = row.cells[0].innerHTML;
    var nuevoNombre = prompt("Editar Menú", nombreAnterior);


    if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
        row.cells[0].innerHTML = nuevoNombre;
    }
}

function borrarMenu(button) {

    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
