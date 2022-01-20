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




//Objetos materias agregadas
const materia1 = { nombre: "Matemática Discreta", nota1: 5, nota2: 6, nota3: 6 };
const materia2 = { nombre: "Sistema y Organizaciones", nota1: 8, nota2: 9, nota3: 7 };



// Array de materias 
const arrayMaterias = [materia1, materia2]

//Realizo el pedido de los datos
//Agregando una nueva materia ingresada por el estudiante
function agregarMateria() {

    let n = prompt("Indique nombre de la materia");
    let n1 = parseInt(prompt("Ingrese primer Nota"));
    let n2 = parseInt(prompt("Ingrese Segunda Nota"));
    let n3 = parseInt(prompt("Ingrese Tercera Nota."));
    arrayMaterias.push({ nombre: n, nota1: n1, nota2: n2, nota3: n3 });

}


//Con la Funcion promedio calculo el promedio utilizando las 3 notas obtenidas
function promedio(array) {
    let prom = 0;
    for (let i = 0; i < array.length; i++) {
        prom = (array[i].nota1 + array[i].nota2 + array[i].nota3) / 3;
        array[i].p = prom;
    }
}


//Se verifica si Aprobo o va final
function verificar(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].p >= 8) {
            array[i].aprob = true;
            array[i].estado = true;
            array[i].txtFinal = "Aprobó la materia";
        } else if (array[i].p >= 6 && array[i].p < 8) {
            array[i].aprob = true;
            array[i].estado = false;
            array[i].txtFinal = "debe Final";
        } else {
            array[i].aprob = false;
            array[i].estado = false;
            array[i].txtFinal = "Desaprobó la materia";
        }

    }
}

//Finalmente esta funcion muestra los resultados 
function resultado() {

    //Filtro y muestro por consola las materias con mejor promedio
    const mejorPromedio = arrayMaterias.filter(producto => producto.p >= 8);
    console.log(mejorPromedio);


    let txtResultado = "";
    for (let i = 0; i < arrayMaterias.length; i++) {
        txtResultado = txtResultado + arrayMaterias[i].nombre + ": " + arrayMaterias[i].p + " -- " + arrayMaterias[i].txtFinal + "\n";
    }
    console.log(txtResultado)
    alert(txtResultado);
}

promedio(arrayMaterias);
verificar(arrayMaterias);

//Desafío Complementario--> Ordenar las notas de mayor a menor

//Ordenado por Nombre
function SortArrayNombre(x, y) {
    return x.nombre.localeCompare(y.nombre);
}
var ordNombre = arrayMaterias.sort(SortArrayNombre);
console.log("Ordenado por nombre")
console.log(ordNombre);

//Ordenar PROMEDIO de Mayor a Menor
function SortArrayNt(x, y) {
    return y.p-x.p;
}
var ordNt = arrayMaterias.sort(SortArrayNt);
console.log("Ordenado por Promedio del Mayor al Menor")
console.log(ordNt);

