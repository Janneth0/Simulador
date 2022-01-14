/* SIMULADOR INTERACTIVO:
Se tiene pensado para este Simulador tener un seguimiento de las calificaciones de las materias
Este simulador ahora al ser la primera entrega esta pensada a modo universitario (UTN)
Pero a futuro se planea agregar toda la informacion en relación a las carreras dentro de la Universidad y 
que sea tambien a uso para alumnos del secundario.

-Se realiza el pedido de datos Nombre de una materia y 3 notas
-Con las notas obtenidas se calcula el promedio
-Con el promedio obtenido se verifica si Aprobo o no 
-Con estos ultimos datos se envia una Alert con el nombre, promedio y indicando si aprobo o no
*/

//Realizo el pedido de los datos

let nombre = prompt("Indique nombre de la materia del primer Año");
let nota1 = parseInt(prompt("ingrese primer Nota"));
let nota2 = parseInt(prompt("ingrese Segunda Nota"));
let nota3 = parseInt(prompt("ingrese Tercera Nota. Para poder ver la nota Promedio precione el Boton 1er Año"));

//Con la Funcion promedio calculo el promedio utilizando las 3 notas obtenidas
function promedio(n1,n2,n3){
    let prom=0;
    return prom=(n1+n2+n3)/3;
}

//Se verifica si Aprobo o va final
function verificar(prom) {
    let aprobo="";
    // let final="";
    if(prom>=8){
        aprobo=" SI Aprobo";
    }else if(prom>=6 && prom<8){
        aprobo=" va FINAL ";
    } else{
        aprobo="NO Aprobo";
    }

return aprobo;
}

//Finalmente esta funcion muestra los resultados
function resultado () {
    let resultProm=promedio(nota1,nota2,nota3);
    
    alert("PROMEDIO--> "+nombre +": "+ resultProm + " --"+ verificar(resultProm));
}

function futuro() {
    alert("ESTAMOS TRABAJANDO");
}

