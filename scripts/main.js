/* SIMULADOR INTERACTIVO:
Se tiene pensado para este Simulador tener un seguimiento de las calificaciones de las materias VIGILANTE (Aun no esta definido un nombre especifico)
Este simulador ahora al ser la primera entrega esta pensada a modo universitario (UTN)
Pero a futuro se planea agregar toda la informacion en relación a las carreras dentro de la Universidad y 
que sea tambien a uso para alumnos del secundario.

-Se realiza el pedido de datos Nombre de una materia y 3 notas
-Con las notas obtenidas se calcula el promedio
-Con el promedio obtenido se verifica si Aprobo o no 
-Con estos ultimos datos se envia una Alert con el nombre, promedio y indicando si aprobo o no
*/

const jsonMateria = '{"materia": [{ "id": 82023,"name": "Sistema y Organizaciones", "level": 1}, { "id":950702,"name": "Analisis Matematico 1","level": 1 }, {"id":82020,"name": "Matematica Discreta", "level": 1 },{"id":82021, "name": "Algoritmo y Estructura de Datos", "level": 1 }, { "id":82022,"name": "Arquitectura de Computadoras", "level": 1 },{"id":950701,"name": "Algebra y Geometria Analitica","level": 1 }, {"id":81420,"name": "Quimica","level": 1}, { "id":951604, "name": "Ingenieria y Sociedad","level": 1}]}';
const materia = JSON.parse(jsonMateria);
let mdata = materia.materia;

// Array de materias 
const arrayMaterias = [{ id: 82020, nombre: "Matematica Discreta", nota1: 5, nota2: 6, nota3: 6 }, { id: 82023, nombre: "Sistema y Organizaciones", nota1: 8, nota2: 9, nota3: 7 }]

//Realizo el pedido de los datos
//Agregando una nueva materia ingresada por el estudiante

//CAMBIE LA MANERA DE USAR EVENTOS 
let miFormulario = document.getElementById("boton");
miFormulario.onclick = () =>{agregarMateria();}
let miTabla = document.getElementById("btnTabla");
miTabla.onclick = () =>{resultado();}



function agregarMateria() {
    let idm;
    let n = document.getElementById("nameMateria").value;
    let n1 = parseInt(document.getElementById("nota1").value);
    let n2 = parseInt(document.getElementById("nota2").value);
    let n3 = parseInt(document.getElementById("nota3").value);

    for (let i = 0; i < mdata.length; i++) {
        if (n == mdata[i].name) {
            idm = mdata[i].id;
        }
    }
    arrayMaterias.push({ id: idm, nombre: n, nota1: n1, nota2: n2, nota3: n3 });
    console.log("Materia Agregada")
    console.log(arrayMaterias)
}

//Con la Funcion promedio calculo el promedio utilizando las 3 notas obtenidas
function promedio(array) {
    let prom = 0;
    for (let i = 0; i < array.length; i++) {
        prom = (array[i].nota1 + array[i].nota2 + array[i].nota3) / 3;
        array[i].p = prom;
        console.log(prom, array[i].nota1, array[i].nota2, array[i].nota3)
    }
}


// Se verifica si Aprobo o va final
function verificar(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].p >= 8) {
            array[i].aprob = true;
            array[i].estado = true;
            array[i].txtFinal = "Aprobó la materia";
        } else if (array[i].p >= 6 && array[i].p < 8) {
            array[i].aprob = true;
            array[i].estado = false;
            array[i].txtFinal = "Debe Final";
        } else if (array[i].p < 6) {
            array[i].aprob = false;
            array[i].estado = false;
            array[i].txtFinal = "Desaprobó la materia";
        }

    }
}

//Se arma el listado de materias
function creandoForm() {
    let txthtml = document.getElementById("nameMateria");
    for (let i = 0; i < mdata.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = mdata[i].name;
        txthtml.appendChild(option);
    }
}
creandoForm()

// Finalmente esta funcion muestra los resultados 
function resultado() {
    promedio(arrayMaterias);
    verificar(arrayMaterias);
    let txthtml = document.getElementById("createTable");

    txthtml.innerHTML = "";




    // let txthtml= document.getElementById("createTable");
    for (let i = 0; i < arrayMaterias.length; i++) {
        let fila = document.createElement("tr");
        let fila1 = document.createElement("th");
        let colname = document.createElement("td");
        let coln1 = document.createElement("td");
        let coln2 = document.createElement("td");
        let coln3 = document.createElement("td");
        let colest = document.createElement("td");
        fila1.innerHTML = arrayMaterias[i].id;
        colname.innerHTML = arrayMaterias[i].nombre;
        coln1.innerHTML = arrayMaterias[i].nota1;
        coln2.innerHTML = arrayMaterias[i].nota2;
        coln3.innerHTML = arrayMaterias[i].nota3;
        colest.innerHTML = arrayMaterias[i].txtFinal;

        txthtml.appendChild(fila);
        fila.appendChild(fila1);
        fila.appendChild(colname)
        fila.appendChild(coln1)
        fila.appendChild(coln2)
        fila.appendChild(coln3)
        fila.appendChild(colest)

    }
    //Filtro y muestro por consola las materias con mejor promedio
    // const mejorPromedio = arrayMaterias.filter(producto => producto.p >= 8);
    // console.log(mejorPromedio);
    // txthtml.parentNode.removeChild(txthtml);
}




