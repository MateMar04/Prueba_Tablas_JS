
function getToday() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

function getDefaultNumber() {
    return Math.floor(Math.random() * 10);
}

function getDefaultNombre(){
    return "Alumno"
}
    
function enviar() {
    nombre = document.getElementById("nombre").value;
    fecha = document.getElementById("fecha").value;
    curso = document.getElementById("curso").value;

    if (nombre == "") {
        nombre = getDefaultNombre();
    }
    if (fecha == "") {
        fecha = getToday();
    }
    if (curso == "") {
        curso = getDefaultNumber();
    }

    return [nombre, fecha, curso];
}

function loadData() {
    var data = enviar();
    var table = document.getElementById("tabla");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = data[0];
    cell2.innerHTML = data[1];
    cell3.innerHTML = data[2];
}

// clear table data
function clearData() {
    var table = document.getElementById("tabla");
    var rowCount = table.rows.length;
    for (var i = 1; i < rowCount; i++) {
        table.deleteRow(1);
    }
}



