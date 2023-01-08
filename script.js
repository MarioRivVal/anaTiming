"use strict";

/* DIAS FIJOS, 1º ENERO COMIENZA CON 7 HORAS
funcion que reste los dias entre trabajo y libres*/

const horario = [7, 7, 10];
const horarioSemana = [];

const diasTrabajo = 6; // dias
const diasLibres = 4; // dias

const enero = 31; // dias
const febrero = 28; // dias
const abril = 30;

const mes = febrero;

const diaExtra = enero - diasTrabajo * 3 - diasLibres * 3;


const mes31 = function () {
  for (let i = 0; i < horario.length; i++) {
    horarioSemana.push(horario[i] * 2);
  }
  console.log(horarioSemana);
};

mes31();

let sum = 0;
for (let i = 0; i < horarioSemana.length; i++) {
  sum += horarioSemana[i];
  
}
sum =sum *3;

console.log(sum);

switch (mes) {
  case enero:
    console.log(`es enero`);
    break;
  case febrero:
    console.log(`es febrero`);
    break;
  case abril:
    console.log(`es abril`);
    break;

  default:
    console.log(`es incorrecto`);
    break;
}
