//---Desafio6/ejercicio1 💪​---
console.log(document.title+" 1");


//---Desafio6/Ejercicio3 💪​---
const member01 = document.getElementById("m01");
const member02 = document.getElementById("m02");
let nameM01 ="";
let nameM02 ="";
console.log(member01.getElementsByTagName("dd").length);
for (let i = 0; i < 4; i++) {
    switch (i) {
        case 0:
            if (member01.getElementsByTagName("dd")[i].innerText != ""){
                    nameM01=member01.getElementsByTagName("dd")[i].innerText;
            }
            if (member02.getElementsByTagName("dd")[i].innerText != ""){
                nameM02=member02.getElementsByTagName("dd")[i].innerText;
            }
            break;
        case 1:
            if (member01.getElementsByTagName("dd")[i].innerText != ""){
                nameM01=nameM01+" "+member01.getElementsByTagName("dd")[i].innerText;
            }
            if (member02.getElementsByTagName("dd")[i].innerText != ""){
                nameM02=nameM02+" "+member02.getElementsByTagName("dd")[i].innerText;
            }
            break;
        case 2:
        case 3:
            if (member01.getElementsByTagName("dd")[i].innerText != ""){
                nameM01=nameM01+" "+member01.getElementsByTagName("dd")[i].innerText.toUpperCase();
            }
            if (member02.getElementsByTagName("dd")[i].innerText != ""){
                nameM02=nameM02+" "+member02.getElementsByTagName("dd")[i].innerText.toUpperCase();
            }
            break;
        default:
            console.log("Oops, esto es un error 😢");
            break;
        }
}

console.log(`-----\n
    Integrante 1: "${nameM01}"\n
    Integrante 2: "${nameM02}"\n
    -----`);


//---Desafio6/Ejercicio4 💪​---
let matchNames = [];
let stylecolor ="";
let flag01 = false;
for (let i = 0; i < 2; i++) {
    for (let x = 0; x < 2; x++) {
        if (member01.getElementsByTagName("dd")[i].innerText == member02.getElementsByTagName("dd")[x].innerText) {
            matchNames[0] = i;
            matchNames[1] = x;
            flag01=true;
        }
    }
    
}
if (flag01) {
    console.log("Ha habido coincidencia en los nombres!");
    stylecolor = window.prompt("Ha habido coicidencia en los nombres!.\nIngrese un color");

    member01.getElementsByTagName("dd")[matchNames[0]].style = `color: ${stylecolor}`;
    member02.getElementsByTagName("dd")[matchNames[1]].style = `color: ${stylecolor}`;
} else console.log("No ha habido coicidencia en los nombres!");
 
 if (window.confirm("Desea analizar los apellidos en busca de coincidencias?")) {
    flag01 = false;
    for (let i = 2; i < 4; i++) {
        for (let x = 2; x < 4; x++) {
            if (member01.getElementsByTagName("dd")[i].innerText == member02.getElementsByTagName("dd")[x].innerText) {
                matchNames[0] = i;
                matchNames[1] = x;
                flag01=true;
            }
        }
       
    }
}
if (flag01) {
    console.log("Ha habido coincidencia en los apellidos!");
    stylecolor = window.prompt("Ha habido coicidencia en los apellidos!.\nIngrese un color");
   
    member01.getElementsByTagName("dd")[matchNames[0]].style = `color: ${stylecolor}`;
    member02.getElementsByTagName("dd")[matchNames[1]].style = `color: ${stylecolor}`;
} else console.log("No ha habido coicidencia en los apellidos!");
    

//---Desafio6/Ejercicio5 💪​---
// Lo mismo pero con funciones
import{
    nameToString,
    coincidencia
}from '../js/functions.js';
nameM01 = nameToString(member01);
nameM02 = nameToString(member02);
console.log(`-----\n
    Integrante 1: "${nameM01}"\n
    Integrante 2: "${nameM02}"\n
    -----`);

let rango = [0, 2];
matchNames = coincidencia(member01, member02, rango);
if (matchNames[2]) {
    console.log("Ha habido coincidencia en los nombres!");
    stylecolor = window.prompt("Ha habido coicidencia en los nombres!.\nIngrese un color");

    member01.getElementsByTagName("dd")[matchNames[0]].style = `color: ${stylecolor}`;
    member02.getElementsByTagName("dd")[matchNames[1]].style = `color: ${stylecolor}`;
} else console.log("No ha habido coicidencia en los nombres!");

if (window.confirm("Desea analizar los apellidos en busca de coincidencias?")) {
    rango = [2, 4];
    matchNames = coincidencia(member01, member02, rango);
    if (matchNames[2]) {
        console.log("Ha habido coincidencia en los apellidos!");
        stylecolor = window.prompt("Ha habido coicidencia en los apellidos!.\nIngrese un color");

        member01.getElementsByTagName("dd")[matchNames[0]].style = `color: ${stylecolor}`;
        member02.getElementsByTagName("dd")[matchNames[1]].style = `color: ${stylecolor}`;
    }else console.log("No ha habido coicidencia en los apellidos!");
}